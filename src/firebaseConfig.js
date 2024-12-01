// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhRD0xCiewfEYnc-Ud_l9wPYDFl1XPVbE",
    authDomain: "technohacks-859df.firebaseapp.com",
    projectId: "technohacks-859df",
    storageBucket: "technohacks-859df.appspot.com",
    messagingSenderId: "28297409368",
    appId: "1:28297409368:web:976491d87094350aff2b2d",
    measurementId: "G-VZD9B7GN9W"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };