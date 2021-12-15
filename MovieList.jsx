import React, { useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({Film}) => {

    return (
        <div className="movie_list">
           { Film.map((el,i)=> <MovieCard key={i} movie={el} />)}
            
        </div>
    )
}

export default MovieList
