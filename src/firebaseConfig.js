// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration (Use process.env without quotes)
const firebaseConfig = {
  apiKey: "AIzaSyAlK4CBJN_b-6j6ABIIRSL_DHnXbRnGyvw",
  authDomain: "spendora-a3dc0.firebaseapp.com",
  projectId: "spendora-a3dc0",
  storageBucket: "spendora-a3dc0.firebasestorage.app",
  messagingSenderId: "893430276543",
  appId: "1:893430276543:web:38b09a21d8252777d6810a",
  measurementId: "G-ZJK4XX8RSM"
};





// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, collection, getDocs, doc, setDoc, addDoc };
  