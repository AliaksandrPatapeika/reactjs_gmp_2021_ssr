import {noop} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import ClearIndicator from './ClearIndicator';

describe('ClearIndicator', () => {
  test('renders correctly', () => {
    const clearIndicator = renderer
      .create(<ClearIndicator getStyles={noop} cx={noop} />)
      .toJSON();

    expect(clearIndicator).toMatchSnapshot();
  });
});
