import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCnXzkxFQdH3lVzC4O0Dzz30tBgaHs0Jnw",
  authDomain: "crown-db-alvu.firebaseapp.com",
  databaseURL: "https://crown-db-alvu.firebaseio.com",
  projectId: "crown-db-alvu",
  storageBucket: "crown-db-alvu.appspot.com",
  messagingSenderId: "578990857929",
  appId: "1:578990857929:web:fde30d58cba639d9e77718"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
