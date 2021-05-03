import {noop} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  test('renders correctly', () => {
    const searchInput = renderer
      .create(<SearchInput value="value" onChange={noop} />)
      .toJSON();

    expect(searchInput).toMatchSnapshot();
  });
});
