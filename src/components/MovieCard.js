import React from 'react';

const MovieCard = ({title, description, director, releaseDate}) => {
    return <div className='film-list'>
        <p>Film Title: {title}</p>
        <p>Description: {description}</p>
        <p>Director: {director} </p>
        <p>Release Date: {releaseDate}</p>
    </div>
}

export default MovieCard;
