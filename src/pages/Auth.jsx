import { useEffect, useState } from "react";
import { testApi } from "../services/api";
import Register from "../components/forms/Register";
import Login from "../components/forms/Login"; // Import fictif de Login
import '../App.css'

function Auth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    return (
        <div className='heroBackground'>
            {/* Rendu conditionnel en fonction de l'état isLoggedIn */}
            {!isLoggedIn ? <Register /> : <Login />}
        </div>
    );
}

export default Auth;
