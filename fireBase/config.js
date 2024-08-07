// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNCC8VugF6TkswT7VP_PbscqZDUou0cd4",
  authDomain: "product-shop-eaee3.firebaseapp.com",
  projectId: "product-shop-eaee3",
  storageBucket: "product-shop-eaee3.appspot.com",
  messagingSenderId: "557184906315",
  appId: "1:557184906315:web:8dc75a60c5a5f3434809ce",
  measurementId: "G-2F1QDM8QRE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
const storage = getStorage(app);

export { storage };
// Optionally, initialize analytics if needed
// const analytics = getAnalytics(app);
