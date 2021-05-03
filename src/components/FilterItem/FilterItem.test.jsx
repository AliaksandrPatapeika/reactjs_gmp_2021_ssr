import {noop} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import FilterItem from './FilterItem';

describe('FilterItem', () => {
  test('renders correctly', () => {
    const filterItem = renderer
      .create(<FilterItem label="ALL" isActive setFilter={noop} />)
      .toJSON();

    expect(filterItem).toMatchSnapshot();
  });
});
