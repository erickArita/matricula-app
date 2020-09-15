import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCq7zt69yP2i7eekYAbP0nUFFtUVnQ7ZXU",
    authDomain: "insuca-matricula.firebaseapp.com",
    databaseURL: "https://insuca-matricula.firebaseio.com",
    projectId: "insuca-matricula",
    storageBucket: "insuca-matricula.appspot.com",
    messagingSenderId: "155937400895",
    appId: "1:155937400895:web:7a5c78db669a02654df08a",
    measurementId: "G-3FRFMCM6KK"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth()

export {
    db
    , storage 
    , auth 
}