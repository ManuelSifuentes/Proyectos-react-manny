import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1oT_9I77tEtJ-4exhJ0Pq2QORGx7yj-8",
    authDomain: "curso-react-app-94aa0.firebaseapp.com",
    projectId: "curso-react-app-94aa0",
    storageBucket: "curso-react-app-94aa0.appspot.com",
    messagingSenderId: "626402606876",
    appId: "1:626402606876:web:71d198b4038531660044d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}