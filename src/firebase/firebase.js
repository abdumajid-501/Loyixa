import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzvS0nWRsFcWwzIJqzapb8sUkYLIcpF7M",
  authDomain: "fn-45-project-b36b4.firebaseapp.com",
  projectId: "fn-45-project-b36b4",
  storageBucket: "fn-45-project-b36b4.appspot.com",
  messagingSenderId: "34969451476",
  appId: "1:34969451476:web:df05de74dc443eadd4b441"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // 🔥 MUHIM

export default app;
