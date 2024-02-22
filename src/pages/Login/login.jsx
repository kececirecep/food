import React, { useContext, useState } from "react";
import "./login.scss"

import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router";

import { AuthContext } from '../../context/AuthContext'


const Login = () => {
    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user})
                navigate("/")
            })
            .catch((error) => {
                setError(true)
            });



    }

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && <span>Worn email or password!</span>}
            </form>
        </div>
    )
}

export default Login