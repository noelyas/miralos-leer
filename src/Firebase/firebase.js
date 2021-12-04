import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyBizmRUH04hNGJwSmGFRs_FwguC2htSst8",
    authDomain: "miralosleer.firebaseapp.com",
    projectId: "miralosleer",
    storageBucket: "miralosleer.appspot.com",
    messagingSenderId: "403904218687",
    appId: "1:403904218687:web:921555dc5100c757ecda8a",
    measurementId: "G-28W9XTW3JE"

}

const fb = firebase.initializeApp(firebaseConfig)

export const dataBase = fb.firestore()