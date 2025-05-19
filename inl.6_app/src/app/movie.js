import React from 'react'

export default function Movie(props) {
    console.log(props);
    return (
        <li className="list-group-item">
            { props.movie.title }
            <img
        src="/delete.png"
        alt="Ta bort"
        onClick={() => props.deleteMovie(props.movie.id)}/>
        </li>
    )
}