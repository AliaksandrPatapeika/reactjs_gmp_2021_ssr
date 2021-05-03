import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import Menu from './Menu';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {id: '12'}
  })
}));

describe('Menu', () => {
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
    const menu = renderer
      .create(
        <Provider store={store}>
          <Menu />
        </Provider>
      )
      .toJSON();

    expect(menu).toMatchSnapshot();
  });
});
