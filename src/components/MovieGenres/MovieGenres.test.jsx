import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import MockMovies from '../../tests/mocks/mockData';
import MovieGenres from './MovieGenres';

describe('MovieGenres', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const movieGenres = renderer
      .create(<MovieGenres genres={mockMovie.genres.join(', ')} />)
      .toJSON();

    expect(movieGenres).toMatchSnapshot();
  });
});
