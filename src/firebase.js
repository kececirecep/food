import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';




const firebaseConfig = {
  apiKey: "AIzaSyAdwrnaIoeMxwIP5xAjN1SERQM5qWmlE64",
  authDomain: "food-ec015.firebaseapp.com",
  projectId: "food-ec015",
  storageBucket: "food-ec015.appspot.com",
  messagingSenderId: "551960159658",
  appId: "1:551960159658:web:3a92647e551468874fb7d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app)