// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvsblXjkqMsGaktufLHqBvQJXNcaXCQKk",
  authDomain: "the-faithful-hound-dullstroom.firebaseapp.com",
  databaseURL: "https://the-faithful-hound-dullstroom-default-rtdb.firebaseio.com",
  projectId: "the-faithful-hound-dullstroom",
  storageBucket: "the-faithful-hound-dullstroom.firebasestorage.app",
  messagingSenderId: "343652602382",
  appId: "1:343652602382:web:1b2fb8283702d901cfe25f",
  measurementId: "G-09TPYBSPNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
