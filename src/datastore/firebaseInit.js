import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGof39YPVcuLs-wCir5_Ub3gckyCDzQIw",
  authDomain: "poroshat-service.firebaseapp.com",
  databaseURL: "https://poroshat-service.firebaseio.com",
  projectId: "poroshat-service",
  storageBucket: "poroshat-service.appspot.com",
  messagingSenderId: "445401028646",
  appId: "1:445401028646:web:f55d1b74e405e9a07d6ee7",
  measurementId: "G-2TCTVWNXF1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
