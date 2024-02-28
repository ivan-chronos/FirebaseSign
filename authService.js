import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from './firebaseConfig';

const auth = getAuth(app);

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
