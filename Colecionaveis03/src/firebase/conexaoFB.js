import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBy_UqDt36CL26ZxNrAixFojFkLQLVEeIk",
    authDomain: "colecionaveisfb-31dd7.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-31dd7.firebaseio.com",
    projectId: "colecionaveisfb-31dd7",
    storageBucket: "colecionaveisfb-31dd7.appspot.com",
    messagingSenderId: "34873613040",
    appId: "1:34873613040:web:7de27d5bec4f46d8f3c035",
    measurementId: "G-FDWLHFJG3G"
  };

  var app = firebase.initializeApp(firebaseConfig);

  export const conexaoFS = app.firestore();