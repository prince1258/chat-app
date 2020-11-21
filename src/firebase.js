import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyAKkoZ3Ah1lwEygaKpLPUB2o3gA8QZo-44",
  authDomain: "fb-messenger-clone-7cede.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-7cede.firebaseio.com",
  projectId: "fb-messenger-clone-7cede",
  storageBucket: "fb-messenger-clone-7cede.appspot.com",
  messagingSenderId: "525670684213",
  appId: "1:525670684213:web:cd24f87485cba20d5c437c",
  measurementId: "G-1CMK6DMD75",
});

const db = firebaseapp.firestore();

export default db;
