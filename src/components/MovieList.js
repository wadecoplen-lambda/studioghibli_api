import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';

function MovieList() {
    //set up state for the film data we are going to pull from the API
    const [films, setFilms]= useState([]) //set as an empty array by default. It is good practice. 
    //useEffect is desgin for impure functions and is used to control unpredictable behavior. 
    useEffect(() => {
        axios
        .get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            console.log('Success', res)
        })
        .catch(err => {
            console.log('Error', err)
        })
    })
    return (
        <div className= 'title'>
            <MovieCard />
        </div>
    )
}

export default MovieList;

