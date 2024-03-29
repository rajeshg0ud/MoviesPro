import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

function VideoTitle({title, overview, movie_id}) {

  const navigate= useNavigate();

  useMovieTrailer(movie_id);

 const trailerId= useSelector(store => store.movie?.trailerId)

  const handlePlayButton=()=>{
    navigate(`/watch/movie?t=${trailerId}`)
  }

  return (
    <div className='pt-[22%] pl-14  absolute bg-transparent text-white bg-gradient-to-br from-black w-screen aspect-video z-0 bg-opacity-10'>
        <h1 className=' -ml-5 sm:ml-0 text-xl md:text-4xl font-bold'>{title}</h1>
        <p className=' -ml-5 sm:ml-0 w-3/6 lg:w-2/6 mt-3 line-clamp-6 sm:line-clamp-2 lg:line-clamp-none text-xs md:text-base lg:text-xl'>{overview}</p>
        <div className='-ml-5 sm:ml-0 my-3 font-semibold'>
        <button className='bg-white text-black rounded-md py-[2px] px-[5px] md:py-[5px] md:px-[18px] mr-4 hover:bg-opacity-90 shadow-lg text-sm md:text-lg' style={{ boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2) ' }} onClick={handlePlayButton}>
            <FontAwesomeIcon icon={faPlay} size='lg'  className=' pr-2'/>
            Play</button><button className='bg-white rounded-md py-[2px] px-[5px] md:py-[5px] md:px-[18px] mr-4 bg-opacity-15 shadow-lg text-sm md:text-lg' style={{ boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <FontAwesomeIcon icon={faInfoCircle} size='lg'  style={{ color: 'white', position: 'relative', zIndex: '1' }}   className=' pr-2'/>
       More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle