import React, { useState } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/signup.css'; // Assuming you have a CSS file for styling
import logo from '../../src/assets/m.png'

const Signup = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://moviesphere-backend-3.onrender.com/signup', { fullname, email, password });
            alert(res.data.msg);
            navigate('/login'); // Redirect to home page after successful signup
        } catch (error) {
            console.error(error);
            alert(error.response.data.msg);
        }
    };

    return (
        <>
        <div className='name'>
                <img src={logo} alt="" className='im' />
                <h1>MovieSphere</h1>
             </div>
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h1 className="signup-title">Sign Up</h1>
                <div className="signup-field">
                    <label>Full Name</label>
                    <input 
                        type="text" 
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                <div className="signup-field">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="signup-field">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
                <p>Already have an account? <NavLink to="/login" className="signup-link">Login</NavLink></p>
            </form>
        </div>
        </>
    );
};

export default Signup;
