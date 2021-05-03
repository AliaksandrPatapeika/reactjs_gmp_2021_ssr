import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import HeaderMain from './HeaderMain';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {search: 'movie'}
  })
}));

describe('HeaderMain', () => {
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
    const headerMain = renderer
      .create(
        <Provider store={store}>
          <HeaderMain />
        </Provider>
      )
      .toJSON();

    expect(headerMain).toMatchSnapshot();
  });
});
