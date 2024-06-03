import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../component/MovieCard';

const MovieListPage = () => {
    const { id } = useParams();
    const [movieList, setMovieList] = useState({ name: '', movies: [] });

    useEffect(() => {
        setMovieList({ name: 'Sample List', movies: [] });
    }, [id]);

    return (
        <div>
            <h2>{movieList.name}</h2>
            <div>
                {movieList.movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieListPage;
