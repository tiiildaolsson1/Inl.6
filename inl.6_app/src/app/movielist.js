"use client";
import React, { useState, useRef } from 'react';
import Movie from './movie';

export default function MovieList() {
    const [movies, setMovies] = useState([{ id: 1, title: "Star Wars", rating: "5"}]);
    const titleRef = useRef();
    const ratingRef = useRef ();

    function addMovie(event) {
        if (event.keyCode === 13) {
            const title = titleRef.current.value.trim();
            const rating = ratingRef.current.value.trim();
    
            if (!title || !rating) {
                window.alert("du behöver ange både titel och betyg! Försök igen");
                return;
            }
    
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            setMovies([...movies, { id: newId, title: title, rating: rating }]);
    
            titleRef.current.value = "";
            ratingRef.current.value = "";
        }
    }
    

    function deleteMovie(id) {
        setMovies(movies.filter(movie => movie.id !== id));
    }

    return (
        <div>
<div className="mb-4">
    <input className="form-control mb-3" ref={titleRef} placeholder="Film titel..." />
    <input className="form-control" ref={ratingRef} placeholder="betyg..." onKeyUp={addMovie} />
</div>


            <ul className="list-group">
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
                ))}
            </ul>
            <strong>{movies.length} </strong> {movies.length === 1 ? "movie" : "filmer"} i listan.
        </div>
    );
    
}
