import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDiKhJyRcQbMklDeIS9lGr-B9Amoi9QmYs",
  authDomain: "mlh-hackconomist.firebaseapp.com",
  projectId: "mlh-hackconomist",
  storageBucket: "mlh-hackconomist.appspot.com",
  messagingSenderId: "900261363260",
  appId: "1:900261363260:web:ebde2a5c50e7d379c90d39",
  measurementId: "G-VGP1ZPCLVH"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp;
let auth = getAuth();

export default function useAuth(setStatus) {
  let navigation = useNavigate();

  async function SignIn() {
    let Google = new GoogleAuthProvider();
    await signInWithPopup(auth, Google)
      .then((res) => {
        setStatus("Success");

        navigation(`/dashboard`);
      })
      .catch((res) => {
        setStatus("Error");
      });
  }

  return {
    google: SignIn
  };
}
