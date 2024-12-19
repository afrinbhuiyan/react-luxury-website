import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Navigate } from "react-router";

const PriveteRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)

    if(loading){
        return <div className="flex items-center justify-center min-h-screen ">
            <span className="loading text-blue-700 loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }

    return <Navigate to={'/login'} ></Navigate>
};

export default PriveteRoute;