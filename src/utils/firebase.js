// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ42KJyIOBeFGdVnBa8DPndzrzRG8sV44",
  authDomain: "netflixx-38283.firebaseapp.com",
  projectId: "netflixx-38283",
  storageBucket: "netflixx-38283.appspot.com",
  messagingSenderId: "747331108883",
  appId: "1:747331108883:web:b2251650d560a823b4ffe6",
  measurementId: "G-Z7DQGG6HGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
