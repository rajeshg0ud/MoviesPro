
import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


function VideoBackground({movie_id}) {
   
    useMovieTrailer(movie_id);

    const trailerId= useSelector(store => store.movie?.trailerId)

  return (
    <div><iframe
    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&controls=0`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className=' aspect-video w-full'
  ></iframe>
  </div>
  )
}

export default VideoBackground