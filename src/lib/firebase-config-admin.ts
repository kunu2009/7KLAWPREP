
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : undefined;

// Only initialize if it's not already initialized.
// Check if running on Vercel and if the service account is missing to avoid build errors.
if (!getApps().length) {
  if (process.env.VERCEL && !serviceAccount) {
    // In a Vercel build environment without a service account,
    // we can skip initialization or use a limited one.
    // For now, we'll just log a warning and not initialize.
    console.warn("Firebase Admin SDK not initialized during Vercel build due to missing service account.");
  } else {
    initializeApp({
      credential: serviceAccount ? cert(serviceAccount) : undefined,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
  }
}

let db, storage;
// Ensure we don't try to use the SDK if it hasn't been initialized.
if (getApps().length > 0) {
    db = getFirestore();
    storage = getStorage();
} else {
    // Provide mock/dummy objects if the SDK is not initialized.
    // This allows the build to pass but runtime will fail if these are used.
    db = {};
    storage = { bucket: () => {} };
}


export { db, storage };
