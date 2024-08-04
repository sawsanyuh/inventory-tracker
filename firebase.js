// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt0_uLtduJdU8YjFtQpIsvVW1wVIApTO8",
  authDomain: "inventory-management-4a074.firebaseapp.com",
  projectId: "inventory-management-4a074",
  storageBucket: "inventory-management-4a074.appspot.com",
  messagingSenderId: "965209369098",
  appId: "1:965209369098:web:3549537a76c0c10a1e4df3",
  measurementId: "G-MSLGV0P8SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);

export{firestore}