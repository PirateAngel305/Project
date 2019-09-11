import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
const config = {
  apiKey: "AIzaSyAh5jU2cn5WgBx0OR4Vj5nlaQt1-vnpPNE",
  authDomain: "projectlist-8a976.firebaseapp.com",
  databaseURL: "https://projectlist-8a976.firebaseio.com",
  projectId: "projectlist-8a976",
  storageBucket: "",
  messagingSenderId: "656601513677",
  appId: "1:656601513677:web:21ac939728c0dbf006f384"
};
const fbConfig = firebase.initializeApp(config);

export default fbConfig;
