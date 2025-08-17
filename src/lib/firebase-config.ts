
// @ts-nocheck
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAomgxhOBMMW17eAgoNkl05hQyOEYevYDs",
  authDomain: "lawprep-sprint.firebaseapp.com",
  projectId: "lawprep-sprint",
  storageBucket: "lawprep-sprint.appspot.com",
  messagingSenderId: "633482539204",
  appId: "1:633482539204:web:8bb00b05226af3faaf1991",
  measurementId: "G-4J7C6J7C6J"
};


// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
