import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVRyoG7y15p7bs80Scwn2wiB7h6IxRI2c",
  authDomain: "trackmaniaskins.firebaseapp.com",
  databaseURL: "https://trackmaniaskins.firebaseio.com",
  projectId: "trackmaniaskins",
  storageBucket: "trackmaniaskins.appspot.com",
  messagingSenderId: "870147414424",
  appId: "1:870147414424:web:2ce9a8c9b96156720d73ed"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;