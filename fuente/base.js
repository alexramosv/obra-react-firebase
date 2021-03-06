import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB0GHAGRwWx9J1RBZuoKTH1IO4Jxh0yo9Q",
  authDomain: "prueba-f7356.firebaseapp.com",
  databaseURL: "https://prueba-f7356.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
