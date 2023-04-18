// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfz0zKTMfxu6wjOe8cEAMtCcpz5hitokc",
    authDomain: "filmoteka-599e8.firebaseapp.com",
    databaseURL: "https://filmoteka-599e8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "filmoteka-599e8",
    storageBucket: "filmoteka-599e8.appspot.com",
    messagingSenderId: "448204349167",
    appId: "1:448204349167:web:ac77389e13cfaab0db051a",
    measurementId: "G-C80DY74WT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth }