import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle, faInfo, faQuestionCircle,   } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function VideoTitle({title, overview}) {

  const trailerId= useSelector(store=> store.movie?.trailerId)
  const navigate= useNavigate();

  const handlePlayButton=()=>{
    navigate("/watch/movie")
  }

  return (
    <div className='pt-[22%] pl-14  absolute bg-transparent text-white bg-gradient-to-br from-black w-screen aspect-video z-0 bg-opacity-10'>
        <h1 className=' text-4xl font-bold'>{title}</h1>
        <p className=' w-2/6 mt-3'>{overview}</p>
        <div className=' my-3 font-semibold'>
        <button className='bg-white text-black rounded-md py-[5px] px-[18px] mr-4 hover:bg-opacity-90 shadow-lg' style={{ boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2) ' }} onClick={handlePlayButton}>
            <FontAwesomeIcon icon={faPlay} size='lg'  className=' pr-2'/>
            Play</button>
        <button className='bg-white rounded-md py-[6px] px-[18px] mr-4 bg-opacity-15 shadow-lg' style={{ boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <FontAwesomeIcon icon={faInfoCircle} size='lg'  style={{ color: 'white', position: 'relative', zIndex: '1' }}   className=' pr-2'/>
       More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle