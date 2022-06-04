import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCs3zyH8IwGdg8UP1pzoNPHaM0h0dfVduk",
    authDomain: "realtime-chatapp-840d3.firebaseapp.com",
    projectId: "realtime-chatapp-840d3",
    storageBucket: "realtime-chatapp-840d3.appspot.com",
    messagingSenderId: "30378312438",
    appId: "1:30378312438:web:95cad07f45b7ab0ad0e2d7"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();