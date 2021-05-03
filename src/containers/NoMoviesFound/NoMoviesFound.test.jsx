import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import NoMoviesFound from './NoMoviesFound';

describe('NoMoviesFound', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        totalAmount: 0
      }
    };
    const store = mockStore(initialState);
    const noMoviesFound = renderer
      .create(
        <Provider store={store}>
          <NoMoviesFound />
        </Provider>
      )
      .toJSON();

    expect(noMoviesFound).toMatchSnapshot();
  });
});
