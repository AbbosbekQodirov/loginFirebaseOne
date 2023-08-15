import firebase from "firebase";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Ca8i2qdjcFV8p8d5_FMDpexxpRNYkqo",
  authDomain: "register-5545c.firebaseapp.com",
  projectId: "register-5545c",
  storageBucket: "register-5545c.appspot.com",
  messagingSenderId: "969843190508",
  appId: "1:969843190508:web:89bd26a376ee83e93d53c9",
  measurementId: "G-WYLBYP6F71",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

export { projectAuth };
