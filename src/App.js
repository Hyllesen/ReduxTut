import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyB795dDFedG_VVRgALLweeegJr_CaDvAVM",
            authDomain: "manager2-42075.firebaseapp.com",
            databaseURL: "https://manager2-42075.firebaseio.com",
            storageBucket: "manager2-42075.appspot.com",
            messagingSenderId: "100405809832"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;