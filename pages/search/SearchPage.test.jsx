import {head} from 'lodash';
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../src/tests/mocks/mockData';
import SearchPage from './index';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      search: 'The Movie',
      filter: 'comedy',
      sortBy: 'runtime',
      sortOrder: 'asc',
      limit: 6
    }
  })
}));

describe('SearchPage', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        isLoading: true,
        movies: MockMovies,
        totalAmount: 6,
        activeModalWindow: 'addMovie',
        activeModalMovie: mockMovie
      },
      query: {
        filter: '',
        sortBy: 'release_date',
        sortOrder: 'desc'
      }
    };
    const store = mockStore(initialState);
    const searchPage = renderer
      .create(
        <Provider store={store}>
          <SearchPage />
        </Provider>
      )
      .toJSON();

    expect(searchPage)
      .toMatchSnapshot();
  });
});
