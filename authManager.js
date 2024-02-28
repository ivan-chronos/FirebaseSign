import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import app from './firebaseConfig';

export const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // unsubscribe on unmount
  }, [auth, initializing]);

  return { user, initializing };
};
