import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "mytraincape.firebaseapp.com",
    projectId: "mytraincape",
    storageBucket: "mytraincape.firebasestorage.app",
    messagingSenderId: "895124972249",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-PMRJZJF575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let messaging;
try {
    messaging = getMessaging(app);
} catch (error) {
    console.error("Firebase messaging not supported in this browser", error);
}

export { app, messaging, analytics };