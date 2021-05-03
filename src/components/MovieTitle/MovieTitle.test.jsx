import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import MockMovies from '../../tests/mocks/mockData';
import MovieTitle from './MovieTitle';

describe('MovieTitle', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const movieTitle = renderer
      .create(<MovieTitle title={mockMovie.title} />)
      .toJSON();

    expect(movieTitle).toMatchSnapshot();
  });
});
