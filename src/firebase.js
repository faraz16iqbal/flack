import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdecST9PSCQC4V0OvJnzeBwRGhnqU5zCA",
  authDomain: "chat-app-d9cdd.firebaseapp.com",
  databaseURL: "https://chat-app-d9cdd.firebaseio.com",
  projectId: "chat-app-d9cdd",
  storageBucket: "chat-app-d9cdd.appspot.com",
  messagingSenderId: "1001532660156",
  appId: "1:1001532660156:web:8a48e6ec07f06903f233b9",
  measurementId: "G-CH44B2SFW2",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
