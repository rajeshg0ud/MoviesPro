import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../utils/constants';
import { addNowPlayingMovies, addUpComingMovies } from '../utils/movieSlice';

const useUpComingMovies = () => {
  const dispatch=useDispatch();

  const getUpComingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options)

    const jsonData=await data.json();
    dispatch(addUpComingMovies(jsonData.results))
    }

  useEffect(()=>{
    getUpComingMovies();
  },[])
}

export default useUpComingMovies