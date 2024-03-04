import React from 'react'
import { IMG_CDN } from '../utils/constants'

function MovieCard({posterPath}) {

  if (!posterPath) return null;
  return (
     <div className="w-36 md:w-44 pr-4">
       <img alt="Movie Card" src={IMG_CDN + posterPath} className=' rounded-md px-1'/>
     </div>
  )
}

export default MovieCard