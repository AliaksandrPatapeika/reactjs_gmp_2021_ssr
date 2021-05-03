import {head} from 'lodash';
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../../../tests/mocks/mockData';
import DeleteMovie from './DeleteMovie';

describe('DeleteMovie', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeModalWindow: 'deleteMovie'
      }
    };
    const store = mockStore(initialState);
    const deleteMovie = renderer
      .create(
        <Provider store={store}>
          <DeleteMovie formTitle="title" movieId={mockMovie.id} />
        </Provider>
      )
      .toJSON();

    expect(deleteMovie).toMatchSnapshot();
  });
});
