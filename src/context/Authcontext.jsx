
import React , {createContext} from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const UserContext = createContext();
const auth = getAuth(app)

const Authcontext = ({children}) => {
    const name="bashar ahmed";
    

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

    const userInfo = {
        name,
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