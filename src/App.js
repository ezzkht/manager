/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyC3e2fq6mfcEcMRnbDQvP6CON6redYlukI",
            authDomain: "manager-9d484.firebaseapp.com",
            databaseURL: "https://manager-9d484.firebaseio.com",
            projectId: "manager-9d484",
            storageBucket: "manager-9d484.appspot.com",
            messagingSenderId: "39572404937"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}


export default App;