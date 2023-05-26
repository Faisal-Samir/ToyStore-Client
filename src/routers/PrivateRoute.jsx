import { useContext, useState } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='mt-5 text-center'><progress className="progress w-56 "></progress></div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to="/login"></Navigate>
    )
}
export default PrivateRoute;