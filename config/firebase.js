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
  FIREBASE_API_KEY=AIzaSyD1QAB6_aoVDbQntX6jUBMe6-5CBDZu-UI,
  FIREBASE_AUTH_DOMAIN=planit-f6457.firebaseapp.com,
  FIREBASE_PROJECT_ID=planit-f6457,
  FIREBASE_STORAGE_BUCKET=planit-f6457.appspot.com,
  FIREBASE_MESSAGING_SENDER_ID=524847393218,
  FIREBASE_APP_ID=1:524847393218:web:5029348dd734ae5857ce5b,
  FIREBASE_MEASUREMENT_ID=G-EKE3VMLSYP,
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);