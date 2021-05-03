import React from 'react';
import ReactSelect from 'react-select';
import renderer from 'react-test-renderer';

import RequiredSelect from './RequiredSelect';

describe('RequiredSelect', () => {
  test('renders correctly', () => {
    const requiredSelect = renderer
      .create(<RequiredSelect SelectComponent={ReactSelect} />)
      .toJSON();

    expect(requiredSelect).toMatchSnapshot();
  });
});
