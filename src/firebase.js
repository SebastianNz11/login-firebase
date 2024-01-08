// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEHJNFcN4CTJoLr87vEwP8BgGlwYUqX_4",
  authDomain: "app-react-100a7.firebaseapp.com",
  projectId: "app-react-100a7",
  storageBucket: "app-react-100a7.appspot.com",
  messagingSenderId: "258635756148",
  appId: "1:258635756148:web:66875c1659d62963951721",
  measurementId: "G-G0BQJP9RXS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);