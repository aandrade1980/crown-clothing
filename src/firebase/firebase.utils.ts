import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { IItem } from "../models/collection";

const config = {
  apiKey: "AIzaSyCnXzkxFQdH3lVzC4O0Dzz30tBgaHs0Jnw",
  authDomain: "crown-db-alvu.firebaseapp.com",
  databaseURL: "https://crown-db-alvu.firebaseio.com",
  projectId: "crown-db-alvu",
  storageBucket: "crown-db-alvu.appspot.com",
  messagingSenderId: "578990857929",
  appId: "1:578990857929:web:fde30d58cba639d9e77718"
};

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData: {}
) => {
  if (!userAuth) return null;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

interface IDataObject {
  title: string;
  items: IItem[];
}

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: IDataObject[]
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(object => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
