import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIvDQ_VPieib0N3gEEVmcOFslw_hDLyww",
  authDomain: "workout-record-eaea0.firebaseapp.com",
  projectId: "workout-record-eaea0",
  storageBucket: "workout-record-eaea0.appspot.com",
  messagingSenderId: "528063421780",
  appId: "1:528063421780:web:b30fe0e10b76c61a96fcc1",
  measurementId: "G-F4ZXEJB1EC",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
