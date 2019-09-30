import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_fbKey}`,
    authDomain: "timetracker-8d078.firebaseapp.com",
    databaseURL: "https://timetracker-8d078.firebaseio.com",
    projectId: "timetracker-8d078",
    storageBucket: "timetracker-8d078.appspot.com",
    messagingSenderId: "562993249985",
    appId: "1:562993249985:web:e666763a5a018582"
  };


  export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase