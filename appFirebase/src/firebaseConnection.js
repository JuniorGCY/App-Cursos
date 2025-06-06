import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyApaP2oEbS6yDOY0Ff5npMv2SRLtd5NM8g",
  authDomain: "react-native-5084b.firebaseapp.com",
  projectId: "react-native-5084b",
  storageBucket: "react-native-5084b.firebasestorage.app",
  messagingSenderId: "1061911674587",
  appId: "1:1061911674587:web:701fc111f2f93f5048d6fe"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { db, auth};