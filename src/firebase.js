import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_51u0e0ywsqu6SeKzelrbyy80thp0UEE",
  authDomain: "clone-3e627.firebaseapp.com",
  databaseURL: "https://clone-3e627.firebaseio.com",
  projectId: "clone-3e627",
  storageBucket: "clone-3e627.appspot.com",
  messagingSenderId: "423999507569",
  appId: "1:423999507569:web:2e3522f5271092d38b5fd0",
  measurementId: "G-JTDD1JG503",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// firestore is a real-time db of firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
