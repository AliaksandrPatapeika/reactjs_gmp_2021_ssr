import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import ResultCount from './ResultCount';

describe('ResultCount', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        totalAmount: 0
      }
    };
    const store = mockStore(initialState);
    const resultCount = renderer
      .create(
        <Provider store={store}>
          <ResultCount />
        </Provider>
      )
      .toJSON();

    expect(resultCount).toMatchSnapshot();
  });
});
