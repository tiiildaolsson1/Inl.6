import React from 'react'
import './index.css';


export default function Movie(props) {
    console.log(props);
    const stars = []; 
    for (let i = 0; i < props.movie.rating; i++) {
        stars.push(
            <img key={i} src="/star.png" alt="star" className='icons float-end'/>
        );
    }
    return (
        <li className="list-group-item">
            { props.movie.title }
            {stars}
            <img src="/delete.png" alt="Ta bort" className="icons float-end" onClick={() => props.deleteMovie(props.movie.id)}/>
        </li>
    )
}