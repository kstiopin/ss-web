import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import mainReducer from './reducer';
import mainSaga from './sagas';
import App from './containers/App';

const sagaMiddleware = createSagaMiddleware();
const theme = createMuiTheme();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mainSaga);

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider theme={ theme }>
      <App />
    </MuiThemeProvider>
  </Provider>, document.getElementById('app'));
