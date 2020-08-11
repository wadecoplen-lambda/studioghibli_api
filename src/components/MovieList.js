import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';

export default function MovieList() {
    const [films, setFilms]= useState([])
    useEffect(() => {
        axios
        .get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            //Why do we do this? We set state to the data returned from the Promise. Therefore, as the data changes on the API, so does the state of that data.
            setFilms(res.data)
        console.log('Success', res)
        })
        .catch(error => {
            console.log('Error', error)
        })
    }, [])
    // add our dependency array to ensure the code runs only once and prevents a loop.
    //a dependency array accepts the state and updates on a state change

    return (
        <div className= 'title'>
           {films.map(item => {
               //Right here was bringing in the MovieCard component and setting the 'props' that will be rendered in MovieCard
               return <MovieCard 
                key = {item.id}
                title = {item.title}
                description = {item.description}
                director = {item.director}
                releaseDate = {item.release_date}
               
               />
           })

           }
            
                
        </div>
    )
}

