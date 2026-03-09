import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3bGlXx2-UDnleqefwwRVjZO82-VHhOs8",
  authDomain: "fbase-71a03.firebaseapp.com",
  projectId: "fbase-71a03",
  storageBucket: "fbase-71a03.firebasestorage.app",
  messagingSenderId: "543272122966",
  appId: "1:543272122966:web:153d16a78085c0b23b19f7",
  measurementId: "G-KGEFZLMY42"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);