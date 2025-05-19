"use client";
import React, { useState, useRef } from 'react';
import Movie from './movie';

export default function MovieList() {
    const [movies, setMovies] = useState([{ id: 1, title: "Star Wars" }]);
    const inputRef = useRef();

    function addMovie(event) {
        if (event.keyCode === 13) {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            setMovies([...movies, { id: newId, title: inputRef.current.value }]);
            inputRef.current.value = "";
        }
    }

    function deleteMovie(id) {
        setMovies(movies.filter(movie => movie.id !== id));
    }

    return (
        <div className="input-group mb-3">
            <input className="form-control" ref={inputRef} placeholder="Add new movie here..." onKeyUp={addMovie}/>
            <ul className="list-group">
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
                ))}
            </ul>
            <strong>{movies.length} </strong> {movies.length === 1 ? "movie" : "movies"} in list.
        </div>
    );
}
