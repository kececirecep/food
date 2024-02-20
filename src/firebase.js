import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



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
export const auth = getAuth();
 