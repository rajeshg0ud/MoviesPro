import React, { useEffect, useState } from 'react'
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerId } from '../utils/movieSlice';

const useMovieTrailer=(movie_id)=>{
    const dispatch=useDispatch();

    //fetches movie trailer and updates to the store

    const getMovieVideos=async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_Options);
        const jsonData= await data.json();
        const filterVideos= jsonData.results?.filter((video)=> video.type== "Trailer");
        const trailer= filterVideos.length ? filterVideos[0] : jsonData.results[0]; //if filtervideos filtered trailer type then 1st object will be selected, if no trailer found then normal 1st video is selected
        if (trailer){ dispatch(addTrailerId(trailer.key));
        console.log(trailer.key)}
    }

    useEffect(()=>{
        getMovieVideos()
    },[])

}

export default useMovieTrailer;