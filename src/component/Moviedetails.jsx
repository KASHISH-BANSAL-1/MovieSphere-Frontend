import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../style/details.css'; 

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=d5a5a1ab`);
            setMovie(res.data);
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className='det'>
            <img src={movie.Poster} alt={movie.Title} className='imgg'/>
           <div className="info">
           <h1>{movie.Title}</h1>
           <div> <span></span>Year: {movie.Year}</div>
           <div> <span>Rated:</span> {movie.Rated}</div>
           <div> <span>Released:</span> {movie.Released}</div>
           <div> <span>Runtime:</span> {movie.Runtime}</div>
           <div> <span>Director:</span> {movie.Director}</div>
           <div> <span>Writer:</span> {movie.Writer}</div>
           <div> <span>Genre: </span>{movie.Genre}</div>
           <div> <span>Plot:</span> {movie.Plot}</div>
           </div>
            
        </div>
    );
};

export default MovieDetails;
