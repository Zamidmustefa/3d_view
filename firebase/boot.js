import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6dqAx1RbsSdRXv79dV0mUpNaKW6sSGFk",
    authDomain: "d-view-lus.firebaseapp.com",
    projectId: "d-view-lus",
    storageBucket: "d-view-lus.appspot.com",
    messagingSenderId: "669523149887",
    appId: "1:669523149887:web:6e04b50e198222bcaa648a",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);