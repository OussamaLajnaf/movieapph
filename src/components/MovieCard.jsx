import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <StarRating rating={movie.rating} />
            <img src={movie.image} alt="" width="250px" />
            <h3>{movie.type}</h3>
            <h3>{movie.name}</h3>
        </div>
    )
}

export default MovieCard
