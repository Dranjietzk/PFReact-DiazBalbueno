// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnW0yJphYZzJu_7KlGWfIZfTbNQhBgsmU",
  authDomain: "gaminghouse-2ce14.firebaseapp.com",
  projectId: "gaminghouse-2ce14",
  storageBucket: "gaminghouse-2ce14.appspot.com",
  messagingSenderId: "538562281767",
  appId: "1:538562281767:web:3e5e38c2347610d49ea902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);