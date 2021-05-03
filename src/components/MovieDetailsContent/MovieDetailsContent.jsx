import './MovieDetailsContent.less';

import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getMovieById} from '../../actions/movies';
import {addDefaultSrc, delimiteredCost} from '../../utils';
import MovieDetailsLabel from '../MovieDetailsLabel';

const MovieDetailsContent = () => {
  const activeMovieDetailsMovie = useSelector((state) => state.movie.activeMovieDetailsMovie);
  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = router.query;

  /* to display the movie details page after refresh */
  useEffect(() => {
    if (!activeMovieDetailsMovie && id) {
      dispatch(getMovieById(id));
    }
  }, [activeMovieDetailsMovie, dispatch, id]);

  return activeMovieDetailsMovie && (
    <div className="movieDetailsContentContainer">
      <img
        src={activeMovieDetailsMovie.poster_path || '/img/noImage.png'}
        onError={addDefaultSrc}
        alt="movie details poster"
        className="movieDetailsPoster"
      />
      <div className="movieDetailsContent">
        <div className="movieDetailsTitleRating">
          <span className="movieDetailsTitle">{activeMovieDetailsMovie.title}</span>
          <div
            className="movieDetailsRating"
            title={`Vote count: ${activeMovieDetailsMovie.vote_count}`}
          >
            {activeMovieDetailsMovie.vote_average || '-'}
          </div>
        </div>
        <div>{activeMovieDetailsMovie.tagline || 'No tagline'}</div>
        <div className="movieDetailsReleaseDateRuntime">
          <div title={`Release date: ${activeMovieDetailsMovie.release_date}`}>
            {new Date(
              activeMovieDetailsMovie.release_date
            ).getFullYear()}
          </div>
          <div>
            {activeMovieDetailsMovie.runtime || 0}
            {' '}
            min
          </div>
        </div>
        <MovieDetailsLabel label="Genres" value={activeMovieDetailsMovie.genres.join(', ')} />
        <MovieDetailsLabel label="Budget" value={delimiteredCost(activeMovieDetailsMovie.budget)} />
        <MovieDetailsLabel
          label="Revenue"
          value={delimiteredCost(activeMovieDetailsMovie.revenue)}
        />
        <div className="overview">{activeMovieDetailsMovie.overview || 'No overview'}</div>
      </div>
    </div>
  );
};

export default MovieDetailsContent;
