import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyBTyr717CSBxevROo1X5SUcD2OqEa_h2aI",
    authDomain: "auth-45264.firebaseapp.com",
    projectId: "auth-45264",
    storageBucket: "auth-45264.appspot.com",
    messagingSenderId: "61755292028",
    appId: "1:61755292028:web:fabbcfb480c7549ccf8cf9",
    measurementId: "G-CN672KXV34"
};

const app = initializeApp(firebaseConfig);
 const storage = getStorage(app);
  const db = getFirestore(app);
 const auth = getAuth(app);

export { storage, db, auth}