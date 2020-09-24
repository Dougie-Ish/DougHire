import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDk6nHJ3HDI6cP7An5dLmfqsWwKUpzbVyQ",
    authDomain: "drone-hire-f7a90.firebaseapp.com",
    databaseURL: "https://drone-hire-f7a90.firebaseio.com",
    projectId: "drone-hire-f7a90",
    storageBucket: "drone-hire-f7a90.appspot.com",
    messagingSenderId: "9923084461",
    appId: "1:9923084461:web:84954e02e2f15996790624",
    measurementId: "G-JCB4VT7QMQ"
});

// const db = firebaseApp.firebase();
const auth = firebase.auth();

export { auth };
