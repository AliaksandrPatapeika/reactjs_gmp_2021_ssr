import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import UseSearch from './UseSearch';

describe('UseSearch', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeModalWindow: false
      }
    };
    const store = mockStore(initialState);
    const useSearch = renderer
      .create(
        <Provider store={store}>
          <UseSearch />
        </Provider>
      )
      .toJSON();

    expect(useSearch).toMatchSnapshot();
  });
});
