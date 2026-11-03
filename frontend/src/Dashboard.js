import { useContext } from "react";
// import { AuthProvider, useAuth } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function Dashboard()
{

    const navigate = useNavigate()

    // const {logout} = useAuth()
    // const {logout} = AuthProvider()
    const {logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    return (
        <>
            <h2> Welcome to User Dashboard Page</h2>
            <Link to={"/test"}>TEST</Link>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}