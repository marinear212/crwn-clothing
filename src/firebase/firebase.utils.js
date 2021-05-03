import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCl91ZcEuLOmRGs6jESJMQzle-CaggJfsU",
  authDomain: "crwn-db-dfd49.firebaseapp.com",
  projectId: "crwn-db-dfd49",
  storageBucket: "crwn-db-dfd49.appspot.com",
  messagingSenderId: "477014374039",
  appId: "1:477014374039:web:63b5ce1192f73e165e1bd2",
  measurementId: "G-82HNGKSKZ0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;