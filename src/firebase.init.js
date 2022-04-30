// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy0mXYH3VVHXUArIKf_QRF3w8omXK_5CY",
  authDomain: "storage-club.firebaseapp.com",
  projectId: "storage-club",
  storageBucket: "storage-club.appspot.com",
  messagingSenderId: "201494270569",
  appId: "1:201494270569:web:1cd70291b92cbd853b48f8",
  measurementId: "G-GV34C4DCZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth ;