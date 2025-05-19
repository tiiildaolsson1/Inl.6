"use client";
import React, { useState, useRef} from 'react';
import Movie from './movie';

export default function MovieList() {
    // skapar lista för att lagra filer 
    const [movies, setMovies] = useState([{ id: 1, title: "Star Wars", rating: "5"}]);
    const [nextId, setNextId] = useState(2);
    // Skapar referens till input fälten, så vi kan läsa dessa värden
    const titleRef = useRef();
    const ratingRef = useRef ();

    function addMovie(event) {
        if (event.keyCode === 13) {
            
            // hämtar title och rating
            const title = titleRef.current.value.trim();
            const rating = ratingRef.current.value;
    
            // Validation så båda fälten är i fyllda innan film läggs till

            if (title === "" && (rating === "" || rating === "0")) {
                window.alert("Du måste ange en titel och ett betyg för att spara filmen");
                return;
            }

            if (title === "") {
                window.alert("Du måste ange en titel för att spara filmen");
                return;
            }

            if (rating === "" || rating === "0") {
                window.alert("Du måste ange ett betyg för att spara filmen");
                return;
            }

    
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            // lägger till den nya filmen i listan
            setMovies([...movies, { id: newId, title: title, rating: rating }]);
            setNextId(prevId => prevId + 1);
            
            //tömmer input fälten
            titleRef.current.value = "";
            ratingRef.current.value = "";
        }
    }
    

    function deleteMovie(id) {
        setMovies(movies.filter(movie => movie.id !== id));
    }

    // Sorterar filmerna i ord. använder LocalCompare för jämföra strängarna
    function sortMoviesAlph () {
        setMovies(prevMovies => {
            const alphSort = [...prevMovies].sort((a, b) => a.title.localeCompare(b.title, 'sv'));
            return alphSort;
        });
    }
    function sortMoviesRating() {
        setMovies(prevMovies => {
            const numberSort = [...prevMovies].sort((a, b) => Number(b.rating) - Number(a.rating));
            return numberSort; 
        });
    } 

    // JSX för det som ska synas på hemsidan
    return (
        <div>
<div className="mb-4">
    <input className="form-control mb-3" ref={titleRef} placeholder="Film titel..." onKeyUp={addMovie} />
    <input className="form-control" ref={ratingRef} placeholder="betyg..." onKeyUp={addMovie} />
</div>
        <ul className="list-group">
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
                ))}
            </ul>

            <button className="btn btn-primary me-2 mt-4" onClick={sortMoviesAlph}>  Sortera alfabetisk </button>
            <button className="btn btn-primary me-2 mt-4" onClick={sortMoviesRating}> Sortera efter betyg </button>
        </div>
    );
    
}
