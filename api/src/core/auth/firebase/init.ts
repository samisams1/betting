import * as credential from '../../../config/firebase.json';
import * as admin from 'firebase-admin';

export default admin.initializeApp({
  credential: admin.credential.cert({
    projectId: credential.project_id,
    privateKey: credential.private_key.replace(/\\n/g, '\n'),
    clientEmail: credential.client_email,
  }),
});

declare global {
  namespace Express {
    interface Request {
      firebaseUser: admin.auth.DecodedIdToken;
    }
  }
}
