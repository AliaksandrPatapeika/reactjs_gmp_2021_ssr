import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetailsLabel from './MovieDetailsLabel';

describe('MovieDetailsLabel', () => {
  test('renders correctly', () => {
    const movieDetailsLabel = renderer
      .create(<MovieDetailsLabel label="mock label" value="mock value" />)
      .toJSON();

    expect(movieDetailsLabel).toMatchSnapshot();
  });
});
