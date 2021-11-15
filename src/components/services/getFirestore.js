import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDgXI36h72XHQDN2UR3qyhyddTl8P-5r8Q",
  
    authDomain: "react-coderhouse-acortez.firebaseapp.com",
  
    projectId: "react-coderhouse-acortez",
  
    storageBucket: "react-coderhouse-acortez.appspot.com",
  
    messagingSenderId: "721166718579",
  
    appId: "1:721166718579:web:cb536b886a9e950448fc06"
  
  };

  const catalogue = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
    return firebase.firestore(catalogue);
}