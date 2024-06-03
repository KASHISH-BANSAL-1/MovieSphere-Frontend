import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../style/card.css'; 
import star from '../../src/assets/star.png';
import save from '../../src/assets/bookmark.png';

const MovieCard = ({ movie }) => {
    const [rating, setRating] = useState(null);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const fetchRating = async () => {
            try {
                const res = await axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=d5a5a1ab`);
                setRating(res.data.imdbRating);
            } catch (error) {
                console.error("Error fetching movie rating:", error);
                setRating(null);
            }
        };

        if (movie.imdbID) {
            fetchRating();
        }
    }, [movie.imdbID]);

    const addToWatchlist = () => {
        setWatchlist(prevWatchlist => [...prevWatchlist, movie]);
        alert(`${movie.Title} has been added to your watchlist!`);
    };

    return (
        <div className='card'>
            <img src={movie.Poster} alt={movie.Title} className='movie-img' />
            <div className='movie-card'>
                <h3 className='movie-title'>{movie.Title}</h3>
                <p className='movie-year'>Year: {movie.Year}</p>
                {rating && <p className='movie-rating'><img src={star} alt="" className='imm' /> {rating}</p>}
                <div className="actions">
                    <NavLink to={`/movies/${movie.imdbID}`} className='movie-view'>View Details</NavLink>
                    <button className="save-button" onClick={addToWatchlist}>+Watchlist</button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
