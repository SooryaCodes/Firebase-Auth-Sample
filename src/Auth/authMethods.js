/*
Importing firebase from firebase config file
----------------------------------------------------------------------------------
*/
import firebase from "../config/firebase";

/*
Exporting Social Media Authentication Methods
----------------------------------------------------------------------------------
*/

//Google
export const googleProvider = new firebase.auth.GoogleAuthProvider();
//Github
export const githubProvider = new firebase.auth.GithubAuthProvider();
