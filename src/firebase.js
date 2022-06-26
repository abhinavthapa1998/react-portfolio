import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDR9nJNlAizjdYq5iqUawX_YUr68fP-n8g",
  authDomain: "react-portfolio-a455f.firebaseapp.com",
  projectId: "react-portfolio-a455f",
  storageBucket: "react-portfolio-a455f.appspot.com",
  messagingSenderId: "617949434781",
  appId: "1:617949434781:web:217552f462aafba614d574"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
