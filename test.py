import gkeepapi

try:

    keepAPI = gkeepapi.Keep()
    keepAPI.login("SDfgfd", "sdfpy ggf")
except Exception as e:
    print(e[0])
    if e == ('BadAuthentication', None):
        print("jhj")

