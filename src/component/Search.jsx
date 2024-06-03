// src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import "../../src/style/search.css"

const Search = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async () => {
        const res = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=d5a5a1ab&s=${query}`);
        setMovies(res.data.Search || []);
    };

    return (
        <div className='search-main'>
           <div className="in">
           <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies"
                className='search-input'
            />
            <button onClick={searchMovies} className='search-button'>Search</button>
           
           </div>
            <div className='search-grid'>
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Search;
