import {List} from 'immutable';
import {head} from 'lodash';

import * as actionTypes from '../../actions/actionTypes';
import MockMovies from '../../tests/mocks/mockData';
import reducer, {initialState} from './movie';

describe('movie reducer', () => {
  const mockMovie = head(MockMovies);

  test('CATCH_ERROR', () => {
    const mockErrorMessage = 'error message';
    const action = {
      type: actionTypes.CATCH_ERROR,
      payload: mockErrorMessage
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      errorMessage: mockErrorMessage
    });
  });

  test('CLOSE_MODAL', () => {
    const initialTestState = {
      ...initialState,
      activeModalWindow: true,
      activeModalMovie: mockMovie
    };
    const action = {
      type: actionTypes.CLOSE_MODAL
    };
    const state = reducer(initialTestState, action);

    expect(state).toEqual({
      ...initialState
    });
  });

  test('CLOSE_MOVIE_DETAILS', () => {
    const initialTestState = {
      ...initialState,
      activeMovieDetailsMovie: mockMovie
    };
    const action = {
      type: actionTypes.CLOSE_MOVIE_DETAILS
    };
    const state = reducer(initialTestState, action);

    expect(state).toEqual({
      ...initialState
    });
  });

  test('FETCH_MOVIES_SUCCESS', () => {
    const mockTotalAmount = 9;
    const initialTestState = {
      ...initialState,
      isLoading: true
    };
    const action = {
      type: actionTypes.FETCH_MOVIES_SUCCESS,
      payload: {
        data: MockMovies,
        totalAmount: mockTotalAmount
      }
    };
    const state = reducer(initialTestState, action);

    expect(state).toEqual({
      ...initialState,
      movies: List(MockMovies),
      totalAmount: mockTotalAmount
    });
  });

  test('GET_MOVIE_BY_ID_SUCCESS', () => {
    const action = {
      type: actionTypes.GET_MOVIE_BY_ID_SUCCESS,
      payload: mockMovie
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      activeMovieDetailsMovie: mockMovie
    });
  });

  test('SHOW_MODAL', () => {
    const mockActiveModalWindow = 'addMovie';
    const action = {
      type: actionTypes.SHOW_MODAL,
      payload: {
        activeModalWindow: mockActiveModalWindow,
        activeModalMovie: mockMovie
      }
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      activeModalWindow: mockActiveModalWindow,
      activeModalMovie: mockMovie
    });
  });

  test('SHOW_MOVIE_DETAILS', () => {
    const action = {
      type: actionTypes.SHOW_MOVIE_DETAILS,
      payload: mockMovie
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      activeMovieDetailsMovie: mockMovie
    });
  });

  test('START_ASYNC_REQUEST', () => {
    const action = {
      type: actionTypes.START_ASYNC_REQUEST
    };
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      isLoading: true
    });
  });
});
