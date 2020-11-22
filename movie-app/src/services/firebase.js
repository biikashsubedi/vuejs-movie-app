import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDi1rJ-RHAtzNKuLKIoAo0XMW1VX5yYOhk",
    authDomain: "vuejs-movie-app-783b3.firebaseapp.com",
    databaseURL: "https://vuejs-movie-app-783b3.firebaseio.com",
    projectId: "vuejs-movie-app-783b3",
    storageBucket: "vuejs-movie-app-783b3.appspot.com",
    messagingSenderId: "498385431883",
    appId: "1:498385431883:web:cca2fcec1da54b747a0cce",
    measurementId: "G-GZPPZZF270"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase
