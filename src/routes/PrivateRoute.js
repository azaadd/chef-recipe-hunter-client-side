import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);
    if (loading) {
        return <div className='container mx-auto w-25'>
                <Spinner animation="border" variant="secondary" className='my-3 m-5'/>
            </div>
    }



    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoute;

/***
 * 1. check user login or not
 * 2. if user is login then allow to visit route
 * 3. else redirect to the login page
 * 4. setup the private route
 * 5. handle loading
 * * */