import React, { useEffect, useRef, useState } from 'react'
import { API_Options } from '../utils/constants';
import LoginBackground from '../Images/MoviesPro-bg.png'
import MovieList from './MovieList';


const Search = () => {

    const [data, setData]=useState(null);
    const value=useRef("RRR");

    const getSearchMovies=async()=>{
        const response= await fetch(`https://api.themoviedb.org/3/search/movie?query=${value?.current?.value}&include_adult=false&page=1`, API_Options);
        const jsonData=await response.json();
        setData(jsonData);
        console.log(jsonData)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setData(value?.current?.value)
        console.log(value?.current?.value)
    }
    

    useEffect(()=>{
        getSearchMovies()
    },[value?.current?.value])

    if(!data) return null;

  return (
        <><img src={LoginBackground} alt="login background" className='z-0 fixed object-cover h-full w-full' />
        <div className=' absolute h-full w-full bg-black z-0 flex flex-col items-center bg-opacity-65  overflow-x-scroll custom-scrollbar'>
            <form className='opacity-100' onSubmit={(e)=>handleSubmit(e)}>
                <input type='text' placeholder='Search Movies' className=' mt-24 border-2 pr-16 pl-2 rounded-md bg-black text-white text-md md:text-lg' ref={value}/>
            </form>
            <div className=' max-w-[97%]'>
            <MovieList title={"Results for " + value?.current?.value} movies={data?.results} />
            </div>
        </div></>
  )
}

export default Search