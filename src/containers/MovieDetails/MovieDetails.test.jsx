import {head} from 'lodash';
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import MovieDetails from './MovieDetails';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {id: '12'}
  })
}));

describe('MovieDetails', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeMovieDetailsMovie: mockMovie
      }
    };
    const store = mockStore(initialState);
    const movieDetails = renderer
      .create(
        <Provider store={store}>
          <MovieDetails title="title" />
        </Provider>
      )
      .toJSON();

    expect(movieDetails).toMatchSnapshot();
  });
});
