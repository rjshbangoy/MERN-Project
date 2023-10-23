// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b6ed7.firebaseapp.com",
  projectId: "mern-estate-b6ed7",
  storageBucket: "mern-estate-b6ed7.appspot.com",
  messagingSenderId: "831244794660",
  appId: "1:831244794660:web:48ef0fa8a01ceb80c651b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);