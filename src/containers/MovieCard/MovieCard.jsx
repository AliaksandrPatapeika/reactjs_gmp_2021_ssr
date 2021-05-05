import './MovieCard.less';

import Link from 'next/link';
import PropTypes from 'prop-types';
import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

import {showModal, showMovieDetails} from '../../actions/movies';
import Button from '../../components/Button';
import MovieGenres from '../../components/MovieGenres';
import MovieReleaseDate from '../../components/MovieReleaseDate';
import MovieTitle from '../../components/MovieTitle';
import {addDefaultSrc} from '../../utils';
import MovieCardMenu from '../MovieCardMenu';

const MovieCard = ({
  movie,
  movie: {
    id, poster_path, title, release_date, genres
  }
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const dispatch = useDispatch();

  const showMovieDetailsWindow = useCallback(() => {
    dispatch(showMovieDetails(movie));
  }, [dispatch, movie]);

  const showMovieCardSubMenu = () => {
    setShowSubMenu(true);
  };

  const closeMovieCardSubMenu = () => {
    setShowSubMenu(false);
  };

  const showEditMovieWindow = () => {
    dispatch(showModal('editMovie', movie));
  };

  const showDeleteMovieWindow = () => {
    dispatch(showModal('deleteMovie', movie));
  };

  return (
    <div
      className="movieCardContainer"
      onMouseLeave={closeMovieCardSubMenu}
    >
      <Link
        href={`/film/${id}`}
        // as={`/film/${title}`} // Implement route masking
      >
        <Button className="posterButton" onClick={showMovieDetailsWindow}>
          <img
            src={poster_path || '/img/noImage.png'}
            onError={addDefaultSrc}
            alt="movie card poster"
            className="movieCardPoster"
          />
        </Button>
      </Link>
      <Button className="threeDotsIcon" onClick={showMovieCardSubMenu}>
        <img src="/img/moreButton.svg" alt="movie card menu" />
      </Button>
      <MovieCardMenu
        showSubMenu={showSubMenu}
        closeSubMenu={closeMovieCardSubMenu}
        showEditMovieWindow={showEditMovieWindow}
        showDeleteMovieWindow={showDeleteMovieWindow}
      />
      <div className="movieTitleReleaseDateContainer">
        <MovieTitle title={title} />
        <MovieReleaseDate releaseDate={release_date} />
      </div>
      <MovieGenres genres={genres.join(', ')} />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number
  })
};

MovieCard.defaultProps = {
  movie: null
};

export default MovieCard;
