import axios from 'axios';

import {BASE_URL} from '../constants/constants';
import {getQueryString} from '../utils';
import * as actions from './actionTypes';

export const catchError = (error) => ({
  type: actions.CATCH_ERROR,
  payload: error
});

export const closeModal = () => ({
  type: actions.CLOSE_MODAL
});

export const closeMovieDetails = () => ({
  type: actions.CLOSE_MOVIE_DETAILS
});

export const fetchMoviesSuccess = (movies) => ({
  type: actions.FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const getMovieByIdSuccess = (movie) => ({
  type: actions.GET_MOVIE_BY_ID_SUCCESS,
  payload: movie
});

export const setFilter = (genre) => ({
  type: actions.SET_ACTIVE_FILTER,
  payload: genre
});

export const setSortBy = (value) => ({
  type: actions.SET_SORT_BY,
  payload: value
});

export const setSortOrder = (value) => ({
  type: actions.SET_SORT_ORDER,
  payload: value
});

export const setLimit = (value) => ({
  type: actions.SET_LIMIT,
  payload: value
});

export const setSearch = (value) => ({
  type: actions.SET_SEARCH,
  payload: value
});

export const showModal = (activeModalWindow, activeModalMovie) => ({
  type: actions.SHOW_MODAL,
  payload: {activeModalWindow, activeModalMovie}
});

export const showMovieDetails = (movie) => ({
  type: actions.SHOW_MOVIE_DETAILS,
  payload: movie
});

export const startAsyncRequest = () => ({
  type: actions.START_ASYNC_REQUEST
});

export const fetchMovies = () => (dispatch, getState) => {
  dispatch(startAsyncRequest());
  return axios
    .get(`${BASE_URL}${getQueryString(getState().query)}`)
    .then((res) => {
      dispatch(fetchMoviesSuccess(res.data));
    })
    .catch((error) => {
      dispatch(catchError(error.message));
    });
};

export const getMovieById = (movieId) => (dispatch) => axios
  .get(`${BASE_URL}/${movieId}`)
  .then((res) => {
    dispatch(getMovieByIdSuccess(res.data));
  })
  .catch((error) => {
    dispatch(catchError(error.message));
  });

export const addMovie = (payload) => (dispatch) => axios
  .post(BASE_URL, payload)
  .then(() => {
    dispatch(closeModal());
  })
  .catch((error) => {
    dispatch(catchError(error.message));
  });

export const editMovie = (payload) => (dispatch) => axios
  .put(BASE_URL, payload)
  .then(() => {
    dispatch(closeModal());
  })
  .catch((error) => {
    dispatch(catchError(error.message));
  });

export const deleteMovie = (movieId) => (dispatch) => axios
  .delete(`${BASE_URL}/${movieId}`)
  .then(() => {
    dispatch(closeModal());
  })
  .catch((error) => {
    dispatch(catchError(error.message));
  });

export const setStateFromURL = (url) => (dispatch) => {
  if (url.get('search')) {
    dispatch(setSearch(url.get('search')));
  }

  if (url.get('filter')) {
    dispatch(setFilter(url.get('filter')));
  }

  if (url.get('sortBy')) {
    dispatch(setSortBy(url.get('sortBy')));
  }

  if (url.get('sortOrder')) {
    dispatch(setSortOrder(url.get('sortOrder')));
  }

  if (url.get('limit')) {
    dispatch(setLimit(url.get('limit')));
  }
};
