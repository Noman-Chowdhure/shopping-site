import  { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)

export const AuthContext = createContext(null)
const Provider = ({children}) => {
    const [user,setUser] = useState(null)
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
          
    }
    const userinfo = {
        user,
        createUser
    }
  return (
    <AuthContext.Provider value={userinfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default Provider