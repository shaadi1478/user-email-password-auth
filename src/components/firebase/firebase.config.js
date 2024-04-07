// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWromODJZvI8AD_b1p45Ti1wjAMyU4Vsk",
  authDomain: "user-email-password-auth-72148.firebaseapp.com",
  projectId: "user-email-password-auth-72148",
  storageBucket: "user-email-password-auth-72148.appspot.com",
  messagingSenderId: "7178752121",
  appId: "1:7178752121:web:ccfbca7577c71e415104a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;