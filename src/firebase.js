// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX-EePgJ_sN52fWdRqDL4k0-VoN9u-oJc",
  authDomain: "clone-project-5f808.firebaseapp.com",
  projectId: "clone-project-5f808",
  storageBucket: "clone-project-5f808.firebasestorage.app",
  messagingSenderId: "77614932563",
  appId: "1:77614932563:web:aa8b400d6e5a76d2ca5ca6",
  measurementId: "G-X5CKNSGKBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, analytics };