/**
 * @format
 */

 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// redux
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer);

const providerApp = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => providerApp);
