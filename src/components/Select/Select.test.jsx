import {noop} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import Select from './Select';

describe('Select', () => {
  test('renders correctly', () => {
    const select = renderer
      .create(<Select onChange={noop} options={[]} />)
      .toJSON();

    expect(select).toMatchSnapshot();
  });
});
