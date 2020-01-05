import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmUDfm_glAueBTx_IayBPe-qkYWOr0MGY",
    authDomain: "canvas-db.firebaseapp.com",
    databaseURL: "https://canvas-db.firebaseio.com",
    projectId: "canvas-db",
    storageBucket: "canvas-db.appspot.com",
    messagingSenderId: "36540008747",
    appId: "1:36540008747:web:0950b90c153c3920161d6e",
    measurementId: "G-KNB138NVTK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
