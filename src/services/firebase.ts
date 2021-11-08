import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyD2WB-kk-0_ZV9ymy9BYCjFB1OV9daVpCc",
  authDomain: "caderno-1518e.firebaseapp.com",
  databaseURL: "https://caderno-1518e-default-rtdb.firebaseio.com",
  projectId: "caderno-1518e",
  storageBucket: "caderno-1518e.appspot.com",
  messagingSenderId: "549850226668",
  appId: "1:549850226668:web:ec2179b3285b8e56372ac9"
};

firebase.initializeApp(firebaseConfig);


//pra usar na aplicação com o nome
const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database}