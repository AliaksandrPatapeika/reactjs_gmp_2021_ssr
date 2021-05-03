import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {configure, mount} from 'enzyme';
import {head} from 'lodash';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import MovieDetailsContent from './MovieDetailsContent';

const mockedDispatch = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {id: '12'}
  })
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockedDispatch
}));

configure({adapter: new Adapter()});

describe('MovieDetailsContent', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeMovieDetailsMovie: mockMovie
      }
    };
    const store = mockStore(initialState);

    useSelector.mockImplementation((callback) => callback(initialState));
    const movieDetailsContent = renderer
      .create(
        <Provider store={store}>
          <MovieDetailsContent title="title" />
        </Provider>
      )
      .toJSON();

    expect(movieDetailsContent).toMatchSnapshot();
  });

  test('loads data on init', () => {
    const initialState = {
      movie: {
        activeMovieDetailsMovie: null
      }
    };

    useSelector.mockImplementation((selectorFn) => selectorFn(initialState));
    mount(<MovieDetailsContent title="title" />);
    expect(mockedDispatch).toHaveBeenCalled();
  });
});
