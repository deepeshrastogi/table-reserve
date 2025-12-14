// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvlTSz0r-qs21WFdL4QRZfTW9WwM0XlJ8",
  authDomain: "table-reserve-7f74b.firebaseapp.com",
  projectId: "table-reserve-7f74b",
  storageBucket: "table-reserve-7f74b.firebasestorage.app",
  messagingSenderId: "946607566014",
  appId: "1:946607566014:web:d19760f49b5ff02eb702ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

