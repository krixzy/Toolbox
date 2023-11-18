// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAvcqGyoIymFU7N-MYYyH3GBAuPPbZ5ww",
  authDomain: "sallingpallehandeltoolbox.firebaseapp.com",
  projectId: "sallingpallehandeltoolbox",
  storageBucket: "sallingpallehandeltoolbox.appspot.com",
  messagingSenderId: "468733083749",
  appId: "1:468733083749:web:8c4fb1e73b67802e81068c",
  measurementId: "G-KZFHE9HPCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);