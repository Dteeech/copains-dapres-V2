import { useEffect, useState } from "react";
import { testApi } from "../services/api";
import Register from "../components/forms/Register";
import Login from "../components/forms/Login"; // Import fictif de Login
import '../App.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";

function Auth() {
    const navigate = useNavigate()
    const { state: { user, jwt } } = useAuth()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        if (user && jwt) {
          navigate('/dashboard')
        }
      }, [user, jwt])

    return (
        <div className='heroBackground'>
            {/* Rendu conditionnel en fonction de l'état isLoggedIn */}
            {!isLoggedIn ? <Register /> : <Login />}
        </div>
    );
}

export default Auth
