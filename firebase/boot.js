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
    apiKey: "AIzaSyBPaXHWXjj6I31_v7f-XeOqQa9XYh5qLNE",
    authDomain: "d-view-uol.firebaseapp.com",
    projectId: "d-view-uol",
    storageBucket: "d-view-uol.appspot.com",
    messagingSenderId: "546972214977",
    appId: "1:546972214977:web:6cb53ae94340c52a0fd640",
    measurementId: "G-FT88DNVN37"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);