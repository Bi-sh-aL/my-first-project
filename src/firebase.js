import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUPKFHrUoAbF4krAKn9K3FHyWll0fMPzc",
    authDomain: "todo-app-82d14.firebaseapp.com",
    projectId: "todo-app-82d14",
    storageBucket: "todo-app-82d14.appspot.com",
    messagingSenderId: "1011690895735",
    appId: "1:1011690895735:web:b8fb9ec3fb7b3faa014972",
    measurementId: "G-N914461RJF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

