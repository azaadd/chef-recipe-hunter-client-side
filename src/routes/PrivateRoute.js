import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    const location = useLocation();
    console.log(location);
    


    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;

/***
 * 1. check user login or not
 * 2. if user is login then allow to visit route
 * 3. else redirect to the login page
 * 4. setup the private route
 * * */