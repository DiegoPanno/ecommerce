import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLAIK8gARjHcvS7oJZqWLca1_MEp_TvGU",
  authDomain: "ecommerce-11ca9.firebaseapp.com",
  projectId: "ecommerce-11ca9",
  storageBucket: "ecommerce-11ca9.appspot.com",
  messagingSenderId: "727836578231",
  appId: "1:727836578231:web:a7fd9bcc47eb8f911bd832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


