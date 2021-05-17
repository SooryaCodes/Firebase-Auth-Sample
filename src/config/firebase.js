import firebase from "firebase/app"
import "firebase/auth"

/*
Firebase Config Options
----------------------------------------------------------------------------------
*/
const firebaseConfig = {
    apiKey:process_env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process_env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:process_env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process_env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process_env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:process_env.REACT_APP_FIREBASE_APP_ID
}

/*
Initializing Firebase 
----------------------------------------------------------------------------------
*/
const app = firebase.initializeApp(firebaseConfig)