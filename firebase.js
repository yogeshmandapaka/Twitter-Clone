import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import  "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMgPte66f8_OgP2NEtG66Bckj4lqWieGc",
  authDomain: "my-twitter-4e597.firebaseapp.com",
  projectId: "my-twitter-4e597",
  storageBucket: "my-twitter-4e597.appspot.com",
  messagingSenderId: "689308013100",
  appId: "1:689308013100:web:8b7f81f93e891b71347789",
  measurementId: "G-J7ZJR2LDFB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;