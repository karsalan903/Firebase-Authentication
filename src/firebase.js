import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjGi01u61TrI-hU45KIAjfeH1XHYFpOhc",
  authDomain: "fir-auth-5886a.firebaseapp.com",
  projectId: "fir-auth-5886a",
  storageBucket: "fir-auth-5886a.appspot.com",
  messagingSenderId: "478353474871",
  appId: "1:478353474871:web:4b48fe6139d10beb7506b2",
  measurementId: "G-KZ6RM1RE78"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;