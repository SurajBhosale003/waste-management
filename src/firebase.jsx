
import { initializeApp } from "firebase/app";
// import { Link, useNavigate } from "react-router-dom";
import {  getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 const firebaseConfig = {
  // apiKey: "AIzaSyCpuK_roMYJLcL38Ns-VLbUZKal6NOTK2U",
  // authDomain: "waste-management-b085f.firebaseapp.com",
  // projectId: "waste-management-b085f",
  // storageBucket: "waste-management-b085f.appspot.com",
  // messagingSenderId: "619291052507",
  // appId: "1:619291052507:web:ecfc5f7f9011f94b98bffe"

  apiKey: "AIzaSyCj9uQ0iS36QjVsWsYvz2nkrRpzFVamgLQ",
  authDomain: "waste-management-a3139.firebaseapp.com",
  databaseURL: "https://waste-management-a3139-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "waste-management-a3139",
  storageBucket: "waste-management-a3139.appspot.com",
  messagingSenderId: "931136334531",
  appId: "1:931136334531:web:7c7cc5ad0a97eb91395076"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db   };