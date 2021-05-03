import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import MockMovies from '../../tests/mocks/mockData';
import MovieReleaseDate from './MovieReleaseDate';

describe('MovieReleaseDate', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const movieReleaseDate = renderer
      .create(<MovieReleaseDate releaseDate={mockMovie.release_date} />)
      .toJSON();

    expect(movieReleaseDate).toMatchSnapshot();
  });
});
