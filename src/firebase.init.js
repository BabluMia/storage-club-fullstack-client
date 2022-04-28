// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz1gQdqzSPczAjP-o6iyJAWbFBPOHuOek",
  authDomain: "warehouse-fdcc8.firebaseapp.com",
  projectId: "warehouse-fdcc8",
  storageBucket: "warehouse-fdcc8.appspot.com",
  messagingSenderId: "1051888173717",
  appId: "1:1051888173717:web:783e133b6ce9e4d07c119c",
  measurementId: "G-KM02VHT5SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth ;