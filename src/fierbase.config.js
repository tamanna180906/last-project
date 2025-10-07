// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW93PlUAFKyvMU-BVHG6HAnZWwJncBoHE",
  authDomain: "fdr-last.firebaseapp.com",
  projectId: "fdr-last",
  storageBucket: "fdr-last.firebasestorage.app",
  messagingSenderId: "243256115293",
  appId: "1:243256115293:web:bc89503e830090d2cb4db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig