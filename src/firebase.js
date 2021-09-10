// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdsSCEfTwKT84jpTb15dkfby3Glf8dWl4",
  authDomain: "blockchaindemo-bbc9f.firebaseapp.com",
  projectId: "blockchaindemo-bbc9f",
  storageBucket: "blockchaindemo-bbc9f.appspot.com",
  messagingSenderId: "936659836986",
  appId: "1:936659836986:web:1234da128efac9263ad503",
  measurementId: "G-MJEK2XE43J",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
