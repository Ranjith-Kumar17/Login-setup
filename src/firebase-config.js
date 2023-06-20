import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
   apiKey: "AIzaSyChaYn7sL0I76UMyP3vdh-fAh6MQEtRgNY",
  authDomain: "login-page-adaca.firebaseapp.com",
  projectId: "login-page-adaca",
  storageBucket: "login-page-adaca.appspot.com",
  messagingSenderId: "314785178785",
  appId: "1:314785178785:web:d4544fdd88d5db632dbce0",
  measurementId: "G-6X5GCKBBFH"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
