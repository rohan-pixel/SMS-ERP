// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxxxxxxxxxx",
  authDomain: "xxxxxx.firebaseapp.com",
  projectId: "xxxxxxxxx",
  storageBucket: "xxxxx.appspot.com",
  messagingSenderId: "xxxxxxxx",
  appId: "x:xxxxxxxxx:web:xxxxxxxxxxxxxx",
  measurementId: "G-xxxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
