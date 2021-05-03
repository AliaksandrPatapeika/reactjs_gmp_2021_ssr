import {noop} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import DropdownIndicator from './DropdownIndicator';

describe('DropdownIndicator', () => {
  test('renders correctly', () => {
    const dropdownIndicator = renderer
      .create(<DropdownIndicator getStyles={noop} cx={noop} />)
      .toJSON();

    expect(dropdownIndicator).toMatchSnapshot();
  });
});
