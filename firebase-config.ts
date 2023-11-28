import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeWcqamdeSJcAeuj0wmn3hE7GFrH-Fmr0",
  authDomain: "next-14-learn.firebaseapp.com",
  projectId: "next-14-learn",
  storageBucket: "next-14-learn.appspot.com",
  messagingSenderId: "694243797901",
  appId: "1:694243797901:web:666e501511b58929676bc4",
  measurementId: "G-WET2JF4DN0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
