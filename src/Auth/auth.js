/*
Importing firebase from firebase config file
----------------------------------------------------------------------------------
*/
import firebase from '../config/firebase'

/*
Social Media Authentication
----------------------------------------------------------------------------------
*/

const socialMediaAuth = (provider) => {
   return firebase.auth().signInWithPopup(provider).then((res) =>{
       return res.user;
    } ).catch((err) =>{
        return err
    })
};

/*
Exporting Social Media Authentication
----------------------------------------------------------------------------------
*/
export default socialMediaAuth;
