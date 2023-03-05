import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  const signUpUser = (email, password) => {

    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
  }

  const loginUser = (email, password) => {
     
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

  }

  const setProfile = (profile) =>{

    return updateProfile (auth.currentUser , profile)

 }

 const emailVerification = () => {
   
     return sendEmailVerification(auth.currentUser)
             
 }



  useEffect(() => {
    
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
        
       setUser(currentUser)
       setLoading(false)

     }) 

     return unsubcribe ; 
 
   },[]) 



  const authInfo = {

       user,
       loading,
       signUpUser,
       loginUser,
       setProfile,
       emailVerification
  
  }

  return (

    <div>
      
      <AuthContext.Provider value={authInfo}>

        {children}

      </AuthContext.Provider>

    </div>

  );

};

export default AuthProvider;