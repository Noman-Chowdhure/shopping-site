import  { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)

export const AuthContext = createContext(null)
const Provider = ({children}) => {

    const [user,setUser] = useState(null);
    console.log(user)
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
          
    }

    const signINUser = ( email, password) =>{
      return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          // ...
        }
      });
    },[])
    const userinfo = {
        user,
        createUser,
        signINUser
    }
  return (
    <AuthContext.Provider value={userinfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default Provider