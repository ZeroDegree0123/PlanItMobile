// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD1QAB6_aoVDbQntX6jUBMe6-5CBDZu-UI",
  authDomain: "planit-f6457.firebaseapp.com",
  projectId: "planit-f6457",
  storageBucket: "planit-f6457.appspot.com",
  messagingSenderId: "524847393218",
  appId: "1:524847393218:web:5029348dd734ae5857ce5b",
  measurementId: "G-EKE3VMLSYP",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);