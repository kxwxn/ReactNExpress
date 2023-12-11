// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhjdYQLMBdZj3K4ZnOi9rT4xP0JkCsgBw",
  authDomain: "n0wlk-3d683.firebaseapp.com",
  projectId: "n0wlk-3d683",
  storageBucket: "n0wlk-3d683.appspot.com",
  messagingSenderId: "791211888746",
  appId: "1:791211888746:web:5d8f21bd6fb4bd4915fa13",
  measurementId: "G-HRW6VBQVQ3",
};
// Initialize Firebase app first
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);

export { fireApp, auth, signInWithEmailAndPassword,createUserWithEmailAndPassword };
