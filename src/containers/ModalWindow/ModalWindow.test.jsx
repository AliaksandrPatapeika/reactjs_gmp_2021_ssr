import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeModalWindow: 'addMovie'
      }
    };
    const store = mockStore(initialState);
    const modalWindow = renderer
      .create(
        <Provider store={store}>
          <ModalWindow />
        </Provider>
      )
      .toJSON();

    expect(modalWindow).toMatchSnapshot();
  });
});
