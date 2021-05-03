import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import Search from './Search';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {search: 'movie'}
  })
}));

describe('Search', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      query: {
        filter: '',
        sortBy: 'release_date',
        sortOrder: 'desc'
      }
    };
    const store = mockStore(initialState);
    const search = renderer
      .create(
        <Provider store={store}>
          <Search />
        </Provider>
      )
      .toJSON();

    expect(search)
      .toMatchSnapshot();
  });
});
