import "./style.scss"
import { useState } from 'react'
import Login from "./Login.jsx"
import Register from "./Register.jsx"
import { BrowserRouter as Routes,  useNavigate, useLocation } from "react-router-dom";

function Authentication() {
    const [isRegistered, setIsRegistered] = useState(true)
    const location = useLocation();
    const navigate = useNavigate(); 
    
    const isLogin = location.pathname === "/login";

    function toggleAuth() {
        setIsRegistered(!isRegistered)
    }

    return (
        <div className="auth-wrapper-container">      
            <div className="form-wrapper">
               { isLogin ? <Login /> : <Register /> }

                <p className="auth-toggler-container">
                { isLogin ?
                        <span>
                            Don't have an account?{" "}
                            <button onClick={() => navigate("/register")}>
                                Create account
                            </button>
                        </span>
                        :
                        <span>
                            Have an account?{" "}
                            <button onClick={() => navigate("/login")}>
                                Login
                            </button>
                        </span>
                    }
                </p>
            </div>
        </div>
    );
}

export default Authentication;