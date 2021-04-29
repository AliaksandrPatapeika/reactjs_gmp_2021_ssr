import {
  filter as lodashFilter, includes, isUndefined, map
} from 'lodash';
import * as Yup from 'yup';

import noImage from '../../public/img/noImage.png';

export const getGenres = (Genres, movieGenres) => lodashFilter(
  Genres, ({label}) => includes(movieGenres, label)
);

export const getStrFromName = (name) => name.split('_').join(' ');

export const getLabelFromName = (name) => getStrFromName(name).toUpperCase();

export const getPlaceholderFromName = (name) => `${getStrFromName(name).charAt(0)
  .toUpperCase()}${getStrFromName(name).slice(1)} here`;

export const isValidVoteAverage = (voteAverage) => isUndefined(voteAverage)
	|| /^\d+(\.\d)?$/.test(voteAverage);

export const isValidUrl = (url) => {
  // validate empty input value
  if (isUndefined(url)) {
    return true;
  }

  try {
    // eslint-disable-next-line no-new
    new URL(url);
  } catch (error) {
    return false;
  }

  return true;
};

export const getValidationSchema = () => Yup.object({
  budget: Yup.number()
    .integer('The budget should be an integer.')
    .typeError('The budget should be a number.')
    .min(0, 'The budget should be greater than or equal to 0.'),
  genres: Yup.array().min(1, 'Select at least one movie genre.'),
  overview: Yup.string().required('Enter the movie overview.'),
  poster_path: Yup.string()
    .test('isValidUrl',
      'Invalid movie poster image URL. Leave this field blank if there is no poster.',
      (value) => isValidUrl(value)),
  release_date: Yup.string().required('Select the movie release date.'),
  revenue: Yup.number()
    .integer('The revenue should be an integer.')
    .typeError('The revenue should be a number.')
    .min(0, 'The revenue should be greater than or equal to 0.'),
  runtime: Yup.number()
    .integer('The runtime should be an integer.')
    .typeError('The runtime should be a number.')
    .min(0, 'The runtime should be greater than or equal to 0.')
    .required('Enter the movie runtime.'),
  tagline: Yup.string().required('Enter the movie tagline.'),
  title: Yup.string().required('Enter the movie title.'),
  vote_average: Yup.number()
    .typeError('The vote average should be a number.')
    .min(0, 'The vote average should be greater than or equal to 0.')
    .max(10, 'The vote average should be less than or equal to 10.')
    .test('isValidVoteAverage',
      'The vote average should have a maximum of 1 digit after the decimal fraction.',
      (value) => isValidVoteAverage(value)),
  vote_count: Yup.number()
    .integer('The vote count should be an integer.')
    .typeError('The vote count should be a number.')
    .min(0, 'The vote count should be greater than or equal to 0.')
});

/* https://medium.com/@webcore1/react-fallback-for-broken-images-strategy-a8dfa9c1be1e */
export const addDefaultSrc = (event) => {
  // eslint-disable-next-line no-param-reassign
  event.target.src = noImage;
};

export const convertMovieData = (movieData) => ({
  poster_path: movieData.poster_path ? movieData.poster_path : window.location.origin + noImage,
  genres: map(movieData.genres, (movie) => movie.label),
  budget: Number(movieData.budget),
  revenue: Number(movieData.revenue),
  runtime: Number(movieData.runtime),
  vote_average: Number(movieData.vote_average),
  vote_count: Number(movieData.vote_count)
});

export const getQueryString = ({
  filter, limit, sortBy, sortOrder, search
}) => `?filter=${filter}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}&searchBy=title`;

export const delimiteredCost = (value) => `${value.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} $`;

export const scrollToTop = () => window.scrollTo(0, 0);
