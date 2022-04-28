import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const app = initializeApp({
  //   apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  //   authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  //   databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  //   projectId: process.env.REACT_APP_FIREBASE_projectId,
  //   storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  //   appId: process.env.REACT_APP_FIREBASE_appId,

  apiKey: "AIzaSyAYZxnOSvRzmu9BZStU1Sy7gVmopxvC0fs",
  authDomain: "fire-blog-app-9fd8c.firebaseapp.com",
  projectId: "fire-blog-app-9fd8c",
  storageBucket: "fire-blog-app-9fd8c.appspot.com",
  messagingSenderId: "353756159133",
  appId: "1:353756159133:web:54c9a2041c441a95804874",
});

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  console.log(email, password);
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};

export const logout = () => {
  signOut(auth);
};
