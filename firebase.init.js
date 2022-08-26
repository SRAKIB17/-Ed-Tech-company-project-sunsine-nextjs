// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyDlIF65XdmmkllZMvNFY1z25nv2j3Esaqs",
  authDomain: "car-manufacturer-df280.firebaseapp.com",
  projectId: "car-manufacturer-df280",
  storageBucket: "car-manufacturer-df280.appspot.com",
  messagingSenderId: "416100753058",
  appId: "1:416100753058:web:def3d78d311f33255ac1fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

