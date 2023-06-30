// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firbase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5zkY_6tVqfr-aeptUuSgDYtu9kMuh6gY",
  authDomain: "calender-898d8.firebaseapp.com",
  projectId: "calender-898d8",
  storageBucket: "calender-898d8.appspot.com",
  messagingSenderId: "936280739623",
  appId: "1:936280739623:web:6e53688698f4a8f22c2302",
  measurementId: "G-NKHH71M9GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};