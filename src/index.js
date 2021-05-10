import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import serviceWorker from './serviceWorker';

// In earlier versions
// import * as firebase from 'firebase';
// import 'firebase/firestore';

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArXtcNT4CEQni09PONceAAoE57W9VNvsk",
    authDomain: "cart-71962.firebaseapp.com",
    projectId: "cart-71962",
    storageBucket: "cart-71962.appspot.com",
    messagingSenderId: "775373994696",
    appId: "1:775373994696:web:31660b448093fdfa6e03fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register()
// serviceWorker.unregister();