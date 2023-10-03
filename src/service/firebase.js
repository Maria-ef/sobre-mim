// Import the functions you need from the SDKs you need
import { getDatabase } from "@firebase/database";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm-pXVnYnkeKd1RKFkfhz1hDYNqeJ6KdA",
  authDomain: "semana15-react.firebaseapp.com",
  databaseURL: "https://semana15-react-default-rtdb.firebaseio.com",
  projectId: "semana15-react",
  storageBucket: "semana15-react.appspot.com",
  messagingSenderId: "1681313740",
  appId: "1:1681313740:web:99d81ef992760d96495769"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getDatabase()

export default database