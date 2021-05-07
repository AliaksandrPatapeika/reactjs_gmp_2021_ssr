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
          key={item.id}
        />
      ))}
    </div>
  );
};

export default React.memo(MoviesList);
