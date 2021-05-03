import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import Loading from './Loading';

describe('Loading', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        isLoading: true
      }
    };
    const store = mockStore(initialState);
    const loading = renderer
      .create(
        <Provider store={store}>
          <Loading />
        </Provider>
      )
      .toJSON();

    expect(loading).toMatchSnapshot();
  });
});
