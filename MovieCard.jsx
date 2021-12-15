import React from 'react'
import StarRating from './StarRating'



const MovieCard = ({movie}) => {
    console.log(movie)
    return (
        <div className="movie_card">
          <h1 > {movie.Title} </h1>
          {/* <h1> {movie.Rating} </h1> */}
          <StarRating rating={movie.Rating}/>
           <img src={movie.Image} alt="" height="500px" width="400px" />

          </div>
    )
}

export default MovieCard
