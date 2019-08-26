import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC6QItPicZbUKczZ5s2DaQ5_BhXNkU3YNY",
  authDomain: "ecommerce-db-b31e0.firebaseapp.com",
  databaseURL: "https://ecommerce-db-b31e0.firebaseio.com",
  projectId: "ecommerce-db-b31e0",
  storageBucket: "",
  messagingSenderId: "137242181567",
  appId: "1:137242181567:web:276fe2f9f58d47bb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
