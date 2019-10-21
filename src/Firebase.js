import firebase from 'firebase';

var fireConfig =  {
    apiKey: "AIzaSyDtSB38wR5tcN14jkiC1uJUB2G8uanhCwg",
    authDomain: "learn365-7e078.firebaseapp.com",
    databaseURL: "https://learn365-7e078.firebaseio.com",
    projectId: "learn365-7e078",
    storageBucket: "learn365-7e078.appspot.com",
    messagingSenderId: "356191233240",
    appId: "1:356191233240:web:8d0f4860350a4340a663ad",
    measurementId: "G-KVZ2TLQJ93"
  };

    // export default fireConfig;
    var secondaryApp = firebase.initializeApp(fireConfig,"secondary");
  // module.exports.secondaryApp = secondaryApp.database();
    // firebase.initializeApp(config);
  // export default firebase;
  export default secondaryApp;

  