// Danger
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaa68fIas7Tr21n1rZ901F5lSV71u1Kr4",
  authDomain: "auth-integration-ad729.firebaseapp.com",
  projectId: "auth-integration-ad729",
  storageBucket: "auth-integration-ad729.firebasestorage.app",
  messagingSenderId: "594844329912",
  appId: "1:594844329912:web:aedf3410b3cc90ebc4914d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);