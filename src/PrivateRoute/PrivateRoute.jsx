import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ImSpinner } from "react-icons/im";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (<div className='my-48'><ImSpinner className='text-9xl mx-auto animate-spin '/></div>)
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;