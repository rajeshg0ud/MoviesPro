import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies}) {


  return (
    <div className="px-6 ">
    <h1 className="text-md md:text-xl font-semibold py-4 text-white">{title}</h1>
    <div className={`flex ${title.includes("Results")? "" : "overflow-x-scroll custom-scrollbar"}`}>
      <div className={`flex ${title.includes("Results")? "flex-wrap" : " " }`}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} value={movie} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default MovieList