import {noop} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import Option from './Option';

describe('Option', () => {
  test('renders correctly', () => {
    const option = renderer
      .create(<Option isSelected label="label" getStyles={noop} cx={noop} />)
      .toJSON();

    expect(option).toMatchSnapshot();
  });
});
