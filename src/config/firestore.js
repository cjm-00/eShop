// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5WqPyrw3OA1JpRUH2OCp1bCuq6Ya0wIQ",
  authDomain: "eshop-w40k.firebaseapp.com",
  projectId: "eshop-w40k",
  storageBucket: "eshop-w40k.firebasestorage.app",
  messagingSenderId: "400823546993",
  appId: "1:400823546993:web:c434770f01b2ecf7b9d7d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
