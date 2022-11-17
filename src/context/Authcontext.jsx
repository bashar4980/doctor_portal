
import React , {createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const UserContext = createContext();
const auth = getAuth(app)

const Authcontext = ({children}) => {
    const name="bashar ahmed";
    const [user , setUser] = useState(null)
    

    //signup with email & password
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth ,email,password)
    }
  //End signup email & password

  //Sign in with email & password
 
  const signinUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email,password)
  }


  //end sign in

  //update user name
    
    const updateUser = (profile) =>{

        return updateProfile(auth.currentUser , profile)
    }

  //update user name

  //get current sign in user 

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
    })
    return ()=>{
      return unSubscribe()
    }
  },[])



  //end sign in user

    const userInfo = {
        name,
        user
        ,
        createUser,
        updateUser,
        signinUser
    }
    return (
       <UserContext.Provider value={userInfo}>
      {children}
       </UserContext.Provider>
    );
};

export default Authcontext;