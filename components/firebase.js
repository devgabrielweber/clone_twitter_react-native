import firebase from "firebase";

const firebaseConfig = {
  databaseURL: "https://app-aula-2022-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyDBWKKU6ydPLtij03KS8gk5Kia-i6rNDSw",
  authDomain: "app-aula-2022.firebaseapp.com",
  projectId: "app-aula-2022",
  storageBucket: "app-aula-2022.appspot.com",
  messagingSenderId: "671131576745",
  appId: "1:671131576745:web:34cd552a4dc455e725fcb8"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
