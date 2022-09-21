// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbIgctk0XU-QffUhtfrqLGxUKX23JkO_s",
  authDomain: "tomando-ando.firebaseapp.com",
  projectId: "tomando-ando",
  storageBucket: "tomando-ando.appspot.com",
  messagingSenderId: "16813417071",
  appId: "1:16813417071:web:0051ce7d77ac04fe00239a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)