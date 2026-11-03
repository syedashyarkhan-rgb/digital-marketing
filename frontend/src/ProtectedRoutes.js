import { Outlet,Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import { useContext } from "react";
// import Dashboard from "./Dashboard";

const ProtectedRoutes = () => {
    // const user = null
    // return user ? <Outlet /> : <Navigate to={'/login'} />


    // const {isAuthenticated} = useAuth()
    const {isAuthenticated} = useContext(AuthContext)
    console.log(isAuthenticated)
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
    // return isAuthenticated ? <Outlet /> : <Dashboard />
}

export default ProtectedRoutes