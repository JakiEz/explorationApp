// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA3yjaCZToaX4Us0nPH3DK1xXFlAJ5lUA",
  authDomain: "photostorage-50102.firebaseapp.com",
  projectId: "photostorage-50102",
  storageBucket: "photostorage-50102.appspot.com",
  messagingSenderId: "59264631420",
  appId: "1:59264631420:web:b40e89f26afc3fcf65fff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);