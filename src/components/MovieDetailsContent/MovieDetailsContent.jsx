import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import {getMovieById} from '../../actions/movies';
import {addDefaultSrc, delimiteredCost} from '../../utils';
import MovieDetailsLabel from '../MovieDetailsLabel';

const MovieDetailsContentContainer = styled.div`
  display: flex;
  padding: 30px 64px 64px 0;
`;
const MovieDetailsPoster = styled.img`
  align-self: flex-start;
  width: 294px;
  object-fit: cover;
`;
const MovieDetailsContentWrapper = styled.div`
  margin: 10px 0 0 63px;
  color: #ffffff;
  font-size: 18px;
  font-family: 'NetflixSans-Regular', sans-serif;
`;
const MovieDetailsTitleRating = styled.div`
  margin-bottom: 12px;
  font-size: 69px;
  font-family: 'TextaAlt-Regular', sans-serif;
`;
const MovieDetailsTitle = styled.span`
  margin-right: 20px;
`;
const MovieDetailsRating = styled.div`
  display: inline-block;
  width: 72px;
  height: 72px;
  border: 1.5px solid #ffffff;
  border-radius: 50%;
  color: #32CD32;
  font-size: 32px;
  text-align: center;
  vertical-align: middle;
  line-height: 66px;
`;
const MovieDetailsReleaseDateRuntime = styled.div`
  display: flex;
  margin: 18px 0;
  color: #f65261;
  font-size: 27px;
  & div:first-child {
    margin-right: 30px;
  }
`;
const Overview = styled.div`
  margin-top: 18px;
`;

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
    <MovieDetailsContentContainer>
      <MovieDetailsPoster
        src={activeMovieDetailsMovie.poster_path || '/img/noImage.png'}
        onError={addDefaultSrc}
        alt="movie details poster"
      />
      <MovieDetailsContentWrapper>
        <MovieDetailsTitleRating>
          <MovieDetailsTitle>{activeMovieDetailsMovie.title}</MovieDetailsTitle>
          <MovieDetailsRating title={`Vote count: ${activeMovieDetailsMovie.vote_count}`}>
            {activeMovieDetailsMovie.vote_average || '-'}
          </MovieDetailsRating>
        </MovieDetailsTitleRating>
        <div>{activeMovieDetailsMovie.tagline || 'No tagline'}</div>
        <MovieDetailsReleaseDateRuntime>
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
        </MovieDetailsReleaseDateRuntime>
        <MovieDetailsLabel label="Genres" value={activeMovieDetailsMovie.genres.join(', ')} />
        <MovieDetailsLabel label="Budget" value={delimiteredCost(activeMovieDetailsMovie.budget)} />
        <MovieDetailsLabel
          label="Revenue"
          value={delimiteredCost(activeMovieDetailsMovie.revenue)}
        />
        <Overview>{activeMovieDetailsMovie.overview || 'No overview'}</Overview>
      </MovieDetailsContentWrapper>
    </MovieDetailsContentContainer>
  );
};

export default MovieDetailsContent;
