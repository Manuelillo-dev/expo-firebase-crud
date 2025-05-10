import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCywgEiAyDNFCwMKjMZ27UH20vIw3PQU98",
  authDomain: "appdemofirebase-e4868.firebaseapp.com",
  projectId: "appdemofirebase-e4868",
  storageBucket: "appdemofirebase-e4868.firebasestorage.app",
  messagingSenderId: "637832033939",
  appId: "1:637832033939:web:fc342f34b9ff6b209dbf66",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
