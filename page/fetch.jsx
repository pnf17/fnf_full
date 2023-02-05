// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwuJyEImJ2VDkhTgoGF8b04Lku1xQ-bu0",
  authDomain: "fnf-project-0124.firebaseapp.com",
  projectId: "fnf-project-0124",
  storageBucket: "fnf-project-0124.appspot.com",
  messagingSenderId: "20913494082",
  appId: "1:20913494082:web:55237938cd1cde06cc75db",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
