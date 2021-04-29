import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer', () => {
  test('renders correctly', () => {
    const footer = renderer
      .create(<Footer />)
      .toJSON();

    expect(footer).toMatchSnapshot();
  });
});
