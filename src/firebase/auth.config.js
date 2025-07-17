// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMR64KSciSkuJtXwQDbqbtmK7kAgR05nw",
  authDomain: "food-hub-6fa90.firebaseapp.com",
  projectId: "food-hub-6fa90",
  storageBucket: "food-hub-6fa90.firebasestorage.app",
  messagingSenderId: "296616019367",
  appId: "1:296616019367:web:603aa5eb1f9f66bb49a282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)