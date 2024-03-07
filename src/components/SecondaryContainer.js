import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {

  const movies= useSelector(store=> store.movie)

  if(!movies.nowPlayingMovies)return;
 
  return (
    <div className="bg-black">
    <div className=" mt-0 md:-mt-52 pl-4 md:pl-7 relative z-20">
      <MovieList title={"Recommended movies"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies?.trendingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies?.slice()?.reverse()} />
      <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
      <MovieList title={"Up Coming Movies"} movies={movies?.upComingMovies?.slice()?.reverse() } />
    </div>
  </div>
  )
}

export default SecondaryContainer