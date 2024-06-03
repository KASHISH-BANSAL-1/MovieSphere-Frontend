// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../component/Search';
import MovieList from '../component/MovieList';
import logo from '../../src/assets/m.png';
import '../style/home.css';

const Home = () => {
    const [movieLists, setMovieLists] = useState([]);
    const [user, setUser] = useState(null);
    const [selectedList, setSelectedList] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('Users'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const addMovieList = () => {
        setMovieLists([...movieLists, { name: 'My List', movies: [] }]);
    };

    const handleLogout = () => {
        localStorage.removeItem('Users');
        setUser(null);
        navigate('/');
    };

 

    return (
        <>
            <nav className='nav'>
                <div className='name'>
                    <img src={logo} alt="" className='im' />
                    <h1>MovieSphere</h1>
                </div>
                {user && (
                    <div className="user-info">
                        <div className='name'>Welcome, {user.fullname}</div>
                        <button className="but" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </nav>
            <p className='para'>
                Discover and organize your favorite movies effortlessly! Create and share personalized movie lists <br />
                to enhance your cinematic journey today!
            </p>
            <div className='front'>
                <Search />
                </div>
        </>
    );
};

export default Home;
