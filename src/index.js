import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAT0TZuzOq-SXIH93fsNhWcR4Ysyp-d69Q",
    authDomain: "emerald-abbey-251212.firebaseapp.com",
    databaseURL: "https://emerald-abbey-251212.firebaseio.com",
    projectId: "emerald-abbey-251212",
    storageBucket: "emerald-abbey-251212.appspot.com",
    messagingSenderId: "549791872833",
    appId: "1:549791872833:web:4c66d109e70615cd1293c0",
    measurementId: "G-7581XXRPNE"
  };
firebase.initializeApp(firebaseConfig);

ReactDOM.render( 
<BrowserRouter>
    <App />
</BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
