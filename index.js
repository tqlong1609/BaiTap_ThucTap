/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

//redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './Redux/Reducer';

//saga
import createSagaMiddleware from 'redux-saga';
import root from './Redux/root';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root);
const providerApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => providerApp);
