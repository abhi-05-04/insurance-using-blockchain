import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB1VYMNmvrnfRtjmU3YBo2GS-G3clPmklk",
    authDomain: "queue-automation.firebaseapp.com",
    projectId: "queue-automation",
    storageBucket: "queue-automation.appspot.com",
    messagingSenderId: "889638154357",
    appId: "1:889638154357:web:893d326e09c4c7e055083c",
    measurementId: "G-M6BDHNC302"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };