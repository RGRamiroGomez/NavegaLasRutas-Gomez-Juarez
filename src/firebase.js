import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0iuiz9M0uI6k14-i41B_ydlivQYLyNNQ",
    authDomain: "e-commercecoderhouse-e2f06.firebaseapp.com",
    projectId: "e-commercecoderhouse-e2f06",
    storageBucket: "e-commercecoderhouse-e2f06.appspot.com",
    messagingSenderId: "40760746623",
    appId: "1:40760746623:web:ed8e791a9fd9d1dd16554a",
    measurementId: "G-WTL8772HQF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)