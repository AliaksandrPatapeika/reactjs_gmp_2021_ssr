import React from 'react';
import renderer from 'react-test-renderer';

import Blur from './Blur';

describe('Blur', () => {
  test('renders correctly', () => {
    const blur = renderer
      .create(<Blur>Test</Blur>)
      .toJSON();

    expect(blur).toMatchSnapshot();
  });
});
