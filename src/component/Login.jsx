import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/login.css';
import logo from '../../src/assets/m.png'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://moviesphere-backend-2.onrender.com/login', { email, password });
            alert(res.data.msg);
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            navigate('/home'); // Redirect to home page after successful login
        } catch (error) {
            console.error(error);
            alert(error.response.data.msg);
        }
    };

    return (
        <>
        <div className="name">
            
        <img src={logo} alt="" className='im' />
        <h1 className='h'>MovieSphere</h1>
        
        </div>
        <div className="login-container">

            <form onSubmit={handleSubmit} className="login-form">
                <h1 className="head">Login</h1>
                <div className="box">
                    <span>Email</span>
                    <input 
                        type="email" 
                        value={email}
                        className='ip'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="box">
                    <span>Password</span>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className='ip'
                        required
                    />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
        </>
    );
};

export default Login;
