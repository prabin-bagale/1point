import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDG18faABfywdIFz95CwqxqmG47F2NT860",
  authDomain: "onepoint-website.firebaseapp.com",
  projectId: "onepoint-website",
  storageBucket: "onepoint-website.appspot.com",
  messagingSenderId: "762643706682",
  appId: "1:762643706682:web:b03ea68e9a95b3578b5603"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, serverTimestamp };