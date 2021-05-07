import './MoviesList.less';

import React from 'react';
import {useSelector} from 'react-redux';

import MovieCard from '../MovieCard';

const MoviesList = () => {
  const movies = useSelector((state) => state.movie.movies);

  return (
    <div className="moviesListContainer">
      {movies.map((item) => (
        <MovieCard
          movie={item}
          // PATTERN: Avoid using Index as Key for map
          key={item.id}
        />
      ))}
    </div>
  );
};

// PATTERN: Memoize React Components
export default React.memo(MoviesList);
