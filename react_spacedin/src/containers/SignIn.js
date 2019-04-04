import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGithubSignIn,
    userGoogleSignIn,
    userSignIn,
    userTwitterSignIn
} from 'actions/Auth';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: 'manummasson8@gmail.com',
            password: '!Iln96Mn01'
        }
    }

    componentDidUpdate() {
        if (this.props.showMessage) {
            setTimeout(() => {
                this.props.hideMessage();
            }, 100);
        }
        // if (this.props.authUser !== null) {
        //     this.props.history.push('/');
        // }
    }

    render() {
        const {
            email,
            password
        } = this.state;
        const {showMessage, loader, alertMessage} = this.props;
        return (
            <div
                className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                <div className="app-login-main-content">

                    <div className="app-logo-content d-flex align-items-center justify-content-center">
                        <Link className="logo-lg" to="/" title="Jambo">
                            <img src={require("assets/images/logo4.png")} alt="jambo" title="jambo"/>
                        </Link>
                    </div>

                    <div className="app-login-content">
                        <div className="app-login-header mb-4">
                            <h1><IntlMessages id="appModule.email"/></h1>
                        </div>

                        <div className="app-login-form">
                            <form>
                                <fieldset>
                                    <TextField
                                        label="Username"
                                        fullWidth
                                        onChange={(event) => this.setState({email: event.target.value})}
                                        defaultValue={email}
                                        margin="normal"
                                        className="mt-1 my-sm-3"
                                    />
                                    <TextField
                                        type="password"
                                        label={<IntlMessages id="appModule.password"/>}
                                        fullWidth
                                        onChange={(event) => this.setState({password: event.target.value})}
                                        defaultValue={password}
                                        margin="normal"
                                        className="mt-1 my-sm-3"
                                    />

                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                        <Button onClick={() => {
                                            // this.props.userSignIn({email, password})
                                            var emailNoSuffix = email.split("@")[0];
                                            this.props.showAuthLoader();
                                            (async () => {
                                                const rawResponse = await fetch('/authenticate', {
                                                    method: 'POST',
                                                    redirect: "follow",
                                                    credentials: "same-origin",
                                                    headers: {
                                                        'Accept': 'application/json',
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify({login: emailNoSuffix, password: password, type : "keep"})
                                                });
                                                console.log(rawResponse);

                                                const content = await rawResponse.json();
                                                if (content.includes('/')) {
                                                    localStorage.setItem('possible_user_id', emailNoSuffix);
                                                    localStorage.setItem('possible_user_name', emailNoSuffix);
                                                    window.location.replace(content);
                                                } else {
                                                    NotificationManager.error("Could not sign into Google Keep:" + content);
                                                }
                                                console.log("yuh", content);
                                            })();


                                        }} variant="contained" color="primary">
                                            <IntlMessages id="appModule.signIn"/>
                                        </Button>

                                        <Link to="/signup">
                                            <IntlMessages id="signIn.signUp"/>
                                        </Link>
                                    </div>

                                </fieldset>
                            </form>
                        </div>
                    </div>

                </div>
                {
                    loader &&
                    <div className="loader-view">
                        <CircularProgress/>
                    </div>
                }
                {showMessage && NotificationManager.error(alertMessage)}
                <NotificationContainer/>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {loader, alertMessage, showMessage, authUser} = auth;
    return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
    userSignIn,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn
})(SignIn);
