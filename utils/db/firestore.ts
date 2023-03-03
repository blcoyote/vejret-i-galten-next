import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    const servicekey = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);
    admin.initializeApp({
      credential: admin.credential.cert(servicekey as admin.ServiceAccount),
    });
  } catch (error: any) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
