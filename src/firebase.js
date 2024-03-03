import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';




const firebaseConfig = {
  apiKey: "AIzaSyCd3oC1XYwGUk5F4wMrY7xk86xYeFKCXeQ",
  authDomain: "food-v2-63dee.firebaseapp.com",
  projectId: "food-v2-63dee",
  storageBucket: "food-v2-63dee.appspot.com",
  messagingSenderId: "866827840425",
  appId: "1:866827840425:web:7956380ef1da60a26c32b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app)