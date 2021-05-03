import {noop} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardMenu from './MovieCardMenu';

describe('MovieCardMenu', () => {
  test('renders correctly', () => {
    const movieCardMenu = renderer
      .create(<MovieCardMenu
        showSubMenu
        closeSubMenu={noop}
        showEditMovieWindow={noop}
        showDeleteMovieWindow={noop}
      />)
      .toJSON();

    expect(movieCardMenu).toMatchSnapshot();
  });
});
