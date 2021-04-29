import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        errorMessage: 'Error message'
      }
    };
    const store = mockStore(initialState);
    const errorBoundary = renderer
      .create(
        <Provider store={store}>
          <ErrorBoundary>
            Test
          </ErrorBoundary>
        </Provider>
      )
      .toJSON();

    expect(errorBoundary).toMatchSnapshot();
  });
});
