import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import "assets/vendors/style"
import indigoTheme from './themes/indigoTheme';
import cyanTheme from './themes/cyanTheme';
import orangeTheme from './themes/orangeTheme';
import amberTheme from './themes/amberTheme';
import pinkTheme from './themes/pinkTheme';
import blueTheme from './themes/blueTheme';
import purpleTheme from './themes/purpleTheme';
import greenTheme from './themes/greenTheme';
import darkTheme from './themes/darkTheme';
import AppLocale from '../lngProvider';
import {
    AMBER,
    BLUE,
    CYAN,
    DARK_AMBER,
    DARK_BLUE,
    DARK_CYAN,
    DARK_DEEP_ORANGE,
    DARK_DEEP_PURPLE,
    DARK_GREEN,
    DARK_INDIGO,
    DARK_PINK,
    DEEP_ORANGE,
    DEEP_PURPLE,
    GREEN,
    INDIGO,
    PINK
} from 'constants/ThemeColors';

import MainApp from 'app/index';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {setInitUrl} from '../actions/Auth';
import RTL from 'util/RTL';
import asyncComponent from 'util/asyncComponent';

function loggedin() {
    if (localStorage.getItem('user_id')) return true
    else return false
}

const RestrictedRoute = ({component: Component,  ...rest}) =>
    <Route
        {...rest}
        render={props =>
            loggedin()
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/signin',
                        state: {from: props.location}
                    }}
                />}
    />;

class App extends Component {

    componentWillMount() {
        window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
        if (this.props.initURL === '') {
            this.props.setInitUrl(this.props.history.location.pathname);
        }
    }

    getColorTheme(themeColor, applyTheme) {
        switch (themeColor) {
            case INDIGO: {
                applyTheme = createMuiTheme(indigoTheme);
                break;
            }
            case CYAN: {
                applyTheme = createMuiTheme(cyanTheme);
                break;
            }
            case AMBER: {
                applyTheme = createMuiTheme(amberTheme);
                break;
            }
            case DEEP_ORANGE: {
                applyTheme = createMuiTheme(orangeTheme);
                break;
            }
            case PINK: {
                applyTheme = createMuiTheme(pinkTheme);
                break;
            }
            case BLUE: {
                applyTheme = createMuiTheme(blueTheme);
                break;
            }
            case DEEP_PURPLE: {
                applyTheme = createMuiTheme(purpleTheme);
                break;
            }
            case GREEN: {
                applyTheme = createMuiTheme(greenTheme);
                break;
            }
            case DARK_INDIGO: {
                applyTheme = createMuiTheme(indigoTheme);
                break;
            }
            case DARK_CYAN: {
                applyTheme = createMuiTheme(cyanTheme);
                break;
            }
            case DARK_AMBER: {
                applyTheme = createMuiTheme(amberTheme);
                break;
            }
            case DARK_DEEP_ORANGE: {
                applyTheme = createMuiTheme(orangeTheme);
                break;
            }
            case DARK_PINK: {
                applyTheme = createMuiTheme(pinkTheme);
                break;
            }
            case DARK_BLUE: {
                applyTheme = createMuiTheme(blueTheme);
                break;
            }
            case DARK_DEEP_PURPLE: {
                applyTheme = createMuiTheme(purpleTheme);
                break;
            }
            case DARK_GREEN: {
                applyTheme = createMuiTheme(greenTheme);
                break;
            }
            default :
                createMuiTheme(indigoTheme);
        }
        return applyTheme;
    }

    render() {
        const {match, location, themeColor, isDarkTheme, locale, initURL, isDirectionRTL} = this.props;
        let applyTheme = createMuiTheme(indigoTheme);
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            applyTheme = createMuiTheme(darkTheme)
        } else {
            applyTheme = this.getColorTheme(themeColor, applyTheme);
        }
        if (location.pathname === '/') {
            if (loggedin() === null) {
                return (<Redirect to={'/signin'}/>);
            } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
                return (<Redirect to={'/app/dashboard/crm'}/>);
            } else {
                return (<Redirect to={initURL}/>);
            }
        } else if (location.pathname === '/sign') {
            localStorage.removeItem('user_id');
            localStorage.removeItem('user_name');
            localStorage.removeItem('possible_user_id');
            localStorage.removeItem('possible_user_name');
            sessionStorage.clear();
            return (<Redirect to={'/signin'}/>);
        } else if (location.pathname === '/success') {
            localStorage.setItem('user_id', localStorage.getItem('possible_user_id'));
            localStorage.setItem('user_name', localStorage.getItem('possible_user_name'));
            return (<Redirect to={'/app/dashboard/crm'}/>);
        }
        if (isDirectionRTL) {
            applyTheme.direction = 'rtl';
            document.body.classList.add('rtl')
        } else {
            document.body.classList.remove('rtl');
            applyTheme.direction = 'ltr';
        }

        const currentAppLocale = AppLocale[locale.locale];
        return (
            <MuiThemeProvider theme={applyTheme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <IntlProvider
                        locale={currentAppLocale.locale}
                        messages={currentAppLocale.messages}>
                        <RTL>
                            <div className="app-main">
                                <Switch>
                                    <RestrictedRoute path={`${match.url}app`} authUser={loggedin()}
                                                     component={MainApp}/>
                                    <Route path='/signin' component={SignIn}/>
                                    <Route path='/signup' component={SignUp}/>
                                    <Route
                                        component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
                                </Switch>
                            </div>
                        </RTL>
                    </IntlProvider>
                </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = ({settings, auth}) => {
    const {themeColor, sideNavColor, darkTheme, locale, isDirectionRTL} = settings;
    const {loggedin, initURL} = auth;
    return {themeColor, sideNavColor, isDarkTheme: darkTheme, locale, isDirectionRTL, loggedin, initURL}
};

export default connect(mapStateToProps, {setInitUrl})(App);
