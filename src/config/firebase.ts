// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKc1dhacRnvUqXmD1ziYG0BiVMjutHuww",
  authDomain: "personal-finance-app-f5836.firebaseapp.com",
  projectId: "personal-finance-app-f5836",
  storageBucket: "personal-finance-app-f5836.firebasestorage.app",
  messagingSenderId: "171836038609",
  appId: "1:171836038609:web:29a79a0dd6b1dec28d14f0",
  measurementId: "G-GJVYXP7SZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;