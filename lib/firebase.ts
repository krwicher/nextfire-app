import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBzn6sosAuNWDIm8M-V0Mvev4BstJE8i4",
  authDomain: "nextfire-599f7.firebaseapp.com",
  projectId: "nextfire-599f7",
  storageBucket: "nextfire-599f7.appspot.com",
  messagingSenderId: "800996585778",
  appId: "1:800996585778:web:e31f50d44171b08d1b672b",
  measurementId: "G-BSVYGSHM45"
}

if(!firebase.apps.length)
{
  const app = firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();