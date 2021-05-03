import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import AddMovie from './AddMovie';

describe('AddMovie', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeModalWindow: 'addMovie'
      }
    };
    const store = mockStore(initialState);
    const addMovie = renderer
      .create(
        <Provider store={store}>
          <AddMovie formTitle="title" />
        </Provider>
      )
      .toJSON();

    expect(addMovie).toMatchSnapshot();
  });
});
