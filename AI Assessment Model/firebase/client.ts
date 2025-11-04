import { initializeApp , getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCCkbBdeIup_ZQuW22z7Sv53Dox2fCSLUY",
    authDomain: "smarthire-6bcb2.firebaseapp.com",
    projectId: "smarthire-6bcb2",
    storageBucket: "smarthire-6bcb2.firebasestorage.app",
    messagingSenderId: "104982042625",
    appId: "1:104982042625:web:4eb5d85d60279d642cc800",
    measurementId: "G-6WN6GQLNEP"
};

const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);