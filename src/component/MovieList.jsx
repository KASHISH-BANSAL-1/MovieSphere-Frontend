
import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ listName, movies }) => {
    return (
        <div>
            <h2>{listName}</h2>
            <div>
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
