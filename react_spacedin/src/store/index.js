import {applyMiddleware, compose, createStore} from 'redux';
import reducers from '../reducers/index';
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';


const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routeMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore(initialState) {
  const store = createStore(reducers(history), initialState,
    composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
export {history};
