import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyDdrU-f2BNj4jUGcsR4UURoDAYt8yk7jR8",

    authDomain: "login-f30d8.firebaseapp.com",

    projectId: "login-f30d8",

    storageBucket: "login-f30d8.appspot.com",

    messagingSenderId: "771826616688",

    appId: "1:771826616688:web:be3cc40b7902c925bae7b5"

};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)