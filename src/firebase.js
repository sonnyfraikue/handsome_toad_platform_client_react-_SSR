import firebase from "firebase/app";
import "firebase/auth";
import {config} from "../config";
const app = firebase.initializeApp({
    apiKey: config.RAZZLE_FIREBASE_API_KEY,
    authDomain: config.RAZZLE_FIREBASE_AUTH_DOMAIN,
    projectId: config.RAZZLE_FIREBASE_PROJECT_ID,
    storageBucket: config.RAZZLE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.RAZZLE_FIREBASE_MESSAGING_SENDER_ID,
    appId: config.RAZZLE_FIREBASE_APP_ID
})

export const auth = app.auth();
export default app;