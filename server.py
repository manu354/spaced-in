from aiohttp import web
import google.oauth2.credentials
import google_auth_oauthlib.flow
import config
import main
import gkeepapi
from flask import Flask, send_from_directory, session, redirect, url_for, escape, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='react_spacedin/build')

CORS(app, support_credentials=True)
# routes = web.RouteTableDef()
import os
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
import pprint

running = False
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
os.environ['OAUTHLIB_RELAX_TOKEN_SCOPE'] = '0'

CLIENT_SECRETS_FILE = "client_secret.json"
SCOPES = ['https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/plus.me',
          'https://www.googleapis.com/auth/calendar',
          'https://www.googleapis.com/auth/userinfo.email']

app.secret_key = os.urandom(32)  # TEMPORARY solution!! change it to a string when in production.


# ROOT_PATH = os.environ.get('ROOT_PATH')


@app.route('/exi', methods=['GET'])
def exi(request):
    exit()


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
def serve(path):
    if path != "" and os.path.exists("react_spacedin/build/" + path):
        return send_from_directory('react_spacedin/build', path)
    else:
        if 'credentials' not in session:
            print("directed to sign")
            return redirect('/sign')
        else:
            return send_from_directory('react_spacedin/build', 'index.html')


def newServiceObject(calCreds, keepCreds):
    oldKeepService = config.clientServices[keepCreds['username']]
    if oldKeepService == "noKeep":
        newService = main.ClientService(calCreds, keepCreds, False)
        config.clientServices[keepCreds['username']] = newService
        config.servicesCount += 0.5
    else:
        newService = main.ClientService(calCreds, keepCreds, oldKeepService)
        config.clientServices[keepCreds['username']] = newService
        config.servicesCount += 0.5


# ROUTES TO HANDLE KEEP AND CAL AUTH
@app.route('/authenticate', methods=['POST'])
@cross_origin(supports_credentials=True)
def authenticate():
    # print(dir(session))
    if 'credentials' not in session:
        req = request.get_json(force=True)
        # print(req)
        # print (request.get_json(force=True))
        session['keep-user'] = req['login']
        session['keep-pass'] = req['password']
        if req['type'] == "keep":

            try:
                print("b4 keep")
                keepAPI = gkeepapi.Keep()
                keepAPI.login(req['login'], req['password'])
                print("afta keep")
                config.clientServices[req['login']] = keepAPI  # may result in errror in main loop
                config.servicesCount += 0.5
                return redirect('/authorize')
            except Exception as e:
                print(e)
                return jsonify("Bad Authentication")
        else:

            config.clientServices[req['login']] = "noKeep"  # may result in errror in main loop
            config.servicesCount += 0.5
            return redirect('/authorize')

    else:
        print(session['credentials'])
        return ('', 204)


@app.route('/sign', methods=['GET'])
def routeSignIn():
    return send_from_directory('react_spacedin/build', 'index.html')


@app.route('/success', methods=['GET'])
def succ():
    return send_from_directory('react_spacedin/build', 'index.html')


@app.route('/main', methods=['GET'])
def initiate():
    print('...')
    credentials = google.oauth2.credentials.Credentials(
        **session['credentials'])

    print(session['keep-user'])
    config.threadPool.submit(newServiceObject, credentials,
                             {'username': session['keep-user'], 'password': session['keep-pass']})

    global running
    if not running:
        print("Not running, starting up")
        config.threadPool.submit(main.startLoop)
        running = True

    return redirect('/success')


@app.route('/signout', methods=['GET'])
def signout():
    del config.clientServices[req["uname"]]
    session.clear()


@app.route('/authorize', methods=['GET'])
@cross_origin(supports_credentials=True)
def authorize():
    print("AUTHORIZING")
    # Create flow instance to manage the OAuth 2.0 Authorization Grant Flow steps.

    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE, scopes=SCOPES)

    flow.redirect_uri = 'http://manuman.com/oauth2callback'

    authorization_url, state = flow.authorization_url(
        # Enable offline access so that you can refresh an access token without
        # re-prompting the user for permission. Recommended for web server apps.
        access_type='offline',
        # Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes='true')

    # Store the state so the callback can verify the auth server response.
    session['state'] = state

    return jsonify(authorization_url)


def credentials_to_dict(credentials):
    print(credentials.token)
    return {'token': credentials.token,
            'refresh_token': credentials.refresh_token,
            'token_uri': credentials.token_uri,
            'client_id': credentials.client_id,
            'client_secret': credentials.client_secret,
            'scopes': credentials.scopes}


@app.route('/oauth2callback', methods=['GET'])
def oauth2callback():
    # Specify the state when creating the flow in the callback so that it can
    # verified in the authorization server response.
    print("auth2callback")
    state = session['state']

    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE, scopes=SCOPES, state=state)
    flow.redirect_uri = 'http://manuman.com/oauth2callback'

    print("Now fetching tokens")
    # Use the authorization server's response to fetch the OAuth 2.0 tokens.
    # print("reqqq", request.args.get('code'))
    authorization_response = request.args.get('code')
    flow.fetch_token(code=authorization_response)
    print("done fetching tokens")
    # Store credentials in the session.
    # ACTION ITEM: In a production app, you likely want to save these
    #              credentials in a persistent database instead.
    # print("req", request.args)
    credentials = flow.credentials
    # print("flow", flow)
    session['credentials'] = credentials_to_dict(credentials)
    # print(dir(credentials))
    # http://manuman.com/oauth2callback?state=ZX4PcXl5PO6AUUppaNVdSXWIjZSgaO&code=4/BgEe5iBw5kxVYdz9Qx1cUuzD-XpB3icdkXAhMN6A1ISXLrobjazxegYWjAZrodTr4os0IIAUAZmo9LuAUcxJDPY&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/calendar%20https://www.googleapis.com/auth/userinfo.profile%20openid&authuser=0&session_state=920061533fcb3acb8916eee04910c46b31a8f268..3bfc&prompt=none
    return redirect('/main')


@app.route('/spaceout', methods=['POST'])
def space_out():
    # session =  get_session(request)
    req = request.json()
    config.threadPool.submit(config.clientServices[req["uname"]].space_out)
    return web.Response(text="cool")


if __name__ == "__main__":
    config.threadPool = ThreadPoolExecutor(max_workers=10)
    port = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', use_reloader=True, port=port, debug=True, threaded=True)
