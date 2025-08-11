
// @ts-nocheck
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  "projectId": "lawprep-sprint",
  "appId": "1:633482539204:web:8bb00b05226af3faaf1991",
  "storageBucket": "lawprep-sprint.firebasestorage.app",
  "apiKey": "AIzaSyAomgxhOBMMW17eAgoNkl05hQyOEYevYDs",
  "authDomain": "lawprep-sprint.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "633482539204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
