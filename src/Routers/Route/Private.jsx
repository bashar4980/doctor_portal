import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/Authcontext';


const Private = ({children}) => {
    const location = useLocation()
    const {user , loading } = useContext(UserContext);
    if(loading){
        return <progress className="progress bg-primary w-100"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default Private;