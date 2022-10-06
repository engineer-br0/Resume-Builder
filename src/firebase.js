import {getAuth} from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYWPX__H6AxpD3OWd_PM9algbDja9q04A",
  authDomain: "karma-2126e.firebaseapp.com",
  projectId: "karma-2126e",
  storageBucket: "karma-2126e.appspot.com",
  messagingSenderId: "411240443627",
  appId: "1:411240443627:web:a1f7181aca40ab14e498ae",
  measurementId: "G-0F9YVQBBDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app , auth, db};