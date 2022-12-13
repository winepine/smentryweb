import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseApiKey, firebaseAppId, firebaseAuthDomain, firebaseMeasurementId, firebaseProjectId, firebaseSenderId, firebaseStorageBucket } from '../app-settings/env-variables';

const app = initializeApp({apiKey:firebaseApiKey,
    authDomain:firebaseAuthDomain,
    projectId:firebaseProjectId,
    storageBucket:firebaseStorageBucket,
    messagingSenderId:firebaseSenderId,
    appId:firebaseAppId,
    measurementId:firebaseMeasurementId});


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db}