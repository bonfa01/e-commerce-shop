import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhyy6XgCIEnzoqleyK9XxV9jyPHXWvbv0",
  authDomain: "pandinoshop.firebaseapp.com",
  projectId: "pandinoshop",
  storageBucket: "pandinoshop.firebasestorage.app",
  messagingSenderId: "390344700976",
  appId: "1:390344700976:web:8523174adcf3a3ba53e9f5",
  measurementId: "G-8Q2KNGQ1EF"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore database
export const db = getFirestore(app);


export const storage = getStorage(app);