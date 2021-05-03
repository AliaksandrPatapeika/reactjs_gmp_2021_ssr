import {head} from 'lodash';
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import HeaderTop from './HeaderTop';

describe('HeaderTop', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeMovieDetailsMovie: mockMovie
      }
    };
    const store = mockStore(initialState);
    const headerTop = renderer
      .create(
        <Provider store={store}>
          <HeaderTop />
        </Provider>
      )
      .toJSON();

    expect(headerTop).toMatchSnapshot();
  });
});
