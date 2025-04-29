import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const payload = {
            email: email,
            password: password,
        };
        axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
            .then(res => {
                localStorage.setItem("token", JSON.stringify(res.data.access_token))
                console.log("Logged in succesfull: ", res)
                alert("Login Successfully")
                navigate("./Profile")
            })
            .catch((err) => {
                alert("Wrong Credentials", err)
            })
    };


    //https://api.escuelajs.co/api/v1/auth/login
    return (
        <div className="bg-light p-4 rounded shadow-sm m-4" style={{ width: '18rem' }}>
            <p className="font-weight-bold text-center h5 mb-4">Login Page</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;