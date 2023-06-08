import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/provider/AuthProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
     const location = useLocation();
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from:location}}replace></Navigate>

};

export default PrivateRoute;