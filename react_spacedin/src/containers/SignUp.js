import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGithubSignIn,
    userGoogleSignIn,
    userSignUp,
    userTwitterSignIn
} from 'actions/Auth';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    componentDidUpdate() {
        if (this.props.showMessage) {
            setTimeout(() => {
                this.props.hideMessage();
            }, 3000);
        }
    }

    render() {
        const {
            name,
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
                        <div className="app-login-header">
                            <h1>Authorize without Google Keep</h1>
                        </div>

                        <div className="app-login-form">
                            <form method="post" action="/authenticate">
                                {/*<TextField*/}
                                {/*type="text"*/}
                                {/*label="Name"*/}
                                {/*onChange={(event) => this.setState({name: event.target.value})}*/}
                                {/*fullWidth*/}
                                {/*defaultValue={name}*/}
                                {/*margin="normal"*/}
                                {/*className="mt-0 mb-2"*/}
                                {/*/>*/}

                                <TextField
                                    type="email"
                                    onChange={(event) => this.setState({email: event.target.value})}
                                    label={<IntlMessages id="appModule.email"/>}
                                    fullWidth
                                    defaultValue={email}
                                    margin="normal"
                                    className="mt-0 mb-2"
                                />

                                <TextField
                                    type="password"
                                    onChange={(event) => this.setState({password: event.target.value})}
                                    label={<IntlMessages id="appModule.password"/>}
                                    fullWidth
                                    defaultValue={password}
                                    margin="normal"
                                    className="mt-0 mb-4"
                                />

                                <div className="mb-3 d-flex align-items-center justify-content-between">
                                    <Button variant="contained" onClick={() => {

                                        this.props.showAuthLoader();
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
                                                    body: JSON.stringify({login: emailNoSuffix, password: password, type: "noKeep"})
                                                });
                                                console.log(rawResponse);

                                                const content = await rawResponse.json();
                                                if (content.includes('/')) {
                                                    localStorage.setItem('possible_user_id', 'noKeep');
                                                    localStorage.setItem('possible_user_name', emailNoSuffix);
                                                    localStorage.setItem('user_id', 'noKeep');
                                                    localStorage.setItem('user_name', emailNoSuffix);
                                                    window.location.replace(content);
                                                } else {
                                                    NotificationManager.error("Could not sign into Google Keep:" + content);
                                                }
                                                console.log("yuh", content);
                                            })();

                                    }} color="primary">
                                        <IntlMessages
                                            id="Enter"/>
                                    </Button>
                                    <Link to="/signin">
                                        <IntlMessages id="Use Keep Instead"/>
                                    </Link>
                                </div>

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
        )
    }
}

const mapStateToProps = ({auth}) => {
    const {loader, alertMessage, showMessage, authUser} = auth;
    return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
    userSignUp,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn
})(SignUp);
