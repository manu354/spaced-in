import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';

import Auth from './Auth';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,

  auth: Auth,
});
