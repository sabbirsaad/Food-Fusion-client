import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
     }

}

export const handleGoogleSignIn = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then(res => {
            const { email, displayName, } = res.user;
            const signedInUser ={
                isSignedIn: 'true',
                name: displayName,
                email: email

            }
            return signedInUser;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
        });

}