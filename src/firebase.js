import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDG18faABfywdIFz95CwqxqmG47F2NT860",
    authDomain: "onepoint-website.firebaseapp.com",
    projectId: "onepoint-website",
    storageBucket: "onepoint-website.appspot.com",
    messagingSenderId: "762643706682",
    appId: "1:762643706682:web:b03ea68e9a95b3578b5603"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore ();
export default firebase;