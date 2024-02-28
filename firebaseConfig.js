import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDI0LSklmuGLNJKMmxQVQs7UlP6rpUu0VY",
  authDomain: "carrinhodecompras-8c2b1.firebaseapp.com",
  projectId: "carrinhodecompras-8c2b1",
  storageBucket: "carrinhodecompras-8c2b1.appspot.com",
  messagingSenderId: "325467587960",
  appId: "1:325467587960:web:be18f07be07b08de56f48d",
  measurementId: "G-7PLSLLS1QE"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
