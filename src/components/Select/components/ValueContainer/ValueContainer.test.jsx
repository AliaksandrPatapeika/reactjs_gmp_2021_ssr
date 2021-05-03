import {noop} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import ValueContainer from './ValueContainer';

describe('ValueContainer', () => {
  test('renders correctly', () => {
    const valueContainer = renderer
      .create(
        <ValueContainer getStyles={noop} cx={noop} getValue={() => [{value: '*'}]}>
          {[[[<span key="1">children 0</span>]], [<span key="2">children 1</span>]]}
        </ValueContainer>
      )
      .toJSON();

    expect(valueContainer).toMatchSnapshot();
  });
});
