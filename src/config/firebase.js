/*
Importing Firebase 
----------------------------------------------------------------------------------
*/
import firebase from "firebase";

/*
Firebase Config Options
----------------------------------------------------------------------------------
*/
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

/*
Initializing Firebase 
----------------------------------------------------------------------------------
*/
firebase.initializeApp(firebaseConfig);

/*
Exporting Firebase
*/
export default firebase;
