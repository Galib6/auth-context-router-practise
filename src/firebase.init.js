// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2ENUt8amWerMKi7Hp-SC0X6ZIpSE0NiA",
    authDomain: "auth-router-context-3b167.firebaseapp.com",
    projectId: "auth-router-context-3b167",
    storageBucket: "auth-router-context-3b167.appspot.com",
    messagingSenderId: "402705401178",
    appId: "1:402705401178:web:824fc4678bf4ad86c1df63",
    measurementId: "G-6RN5ZTJDV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;