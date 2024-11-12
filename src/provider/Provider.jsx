import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signINUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const googleLog = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () =>{
    signOut(auth)
  }
  const userinfo = {
    user,
    createUser,
    signINUser,
    googleLog,
    logOut
  };
  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
