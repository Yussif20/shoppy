import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAiWcOdJd3WMiaEbsSetRywvgWBSRr6ak",
  authDomain: "shoppy-897a5.firebaseapp.com",
  projectId: "shoppy-897a5",
  storageBucket: "shoppy-897a5.appspot.com",
  messagingSenderId: "540293789253",
  appId: "1:540293789253:web:42f46d6cbc572ff79c552c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
