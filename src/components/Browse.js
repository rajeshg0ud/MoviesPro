import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTrendingMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/**
       * mainContainer
       *  -video background
       *   -video Title
       *  Secondary container
       *   - videos
       */}
    </div>
  )
}

export default Browse