
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKcZs7iMfINjytfzt_OvJhshYGl2Taz_Q",
    authDomain: "astrotech-fc20a.firebaseapp.com",
    projectId: "astrotech-fc20a",
    storageBucket: "astrotech-fc20a.appspot.com",
    messagingSenderId: "501068106690",
    appId: "1:501068106690:web:5cf6b71084456779a9a45b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
