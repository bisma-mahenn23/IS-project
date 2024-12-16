import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJLs9zo5IYUIWxEEIKWx5Z7fk0d1twEH8",
  authDomain: "is-project-2c3a7.firebaseapp.com",
  projectId: "is-project-2c3a7",
  storageBucket: "is-project-2c3a7.firebasestorage.app",
  messagingSenderId: "686827375789",
  appId: "1:686827375789:web:844b92ffb49f5e25d38a24",
  measurementId: "G-FF3PQ4ZSM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the database
export const db = getFirestore(app);
