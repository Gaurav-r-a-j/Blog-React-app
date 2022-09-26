import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./register.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username, email, password
            });
            res.data && navigate("/login")
            console.log(res)
        } catch (err) {
            setError(true)
        }


    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label >Username</label>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    className='registerInput'
                    type="text"
                    placeholder="Enter your username..." />

                <label >Email</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='registerInput'
                    type="text"
                    placeholder="Enter your Email..." />

                <label >Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className='registerInput'
                    type="password"
                    placeholder="Enter your Password..." />

                <button className="registerButton" type='submit'>
                    Register
                </button>
            </form>
            <button className="registerLoginButton">
                <Link to='/login'>Login</Link>
            </button>
            {error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong...</span>}
        </div>
    )
}

export default Register