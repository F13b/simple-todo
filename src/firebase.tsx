import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "simple-todo-app-48ca3.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "simple-todo-app-48ca3.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);