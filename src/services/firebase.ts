import firebase from 'firebase/compat/app';

const firebaseConfig = {
apikey: process.env.REACT_APP_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN,
databaseURL: process.env.REACT_APP_DATA_BASE_URL,
projectId: process.env.REACT_APP_PROJECT_ID,
storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
appId: process.env.REACT_APP_APP_ID,

};
{/*
apiKey: "AIzaSyD2WB-kk-0_ZV9ymy9BYCjFB1OV9daVpCc",
  authDomain: "caderno-1518e.firebaseapp.com",
  databaseURL: "https://caderno-1518e-default-rtdb.firebaseio.com",
  projectId: "caderno-1518e",
  storageBucket: "caderno-1518e.appspot.com",
  messagingSenderId: "549850226668",
  appId: "1:549850226668:web:ec2179b3285b8e56372ac9"
*/}

firebase.initializeApp(firebaseConfig);


//pra usar na aplicação com o nome
const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database}