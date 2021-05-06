import {number, text, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

export default {
  title: 'Result count',
  decorators: [withKnobs]
};

export const asDynamicVariables = () => (
  <div>
    <span>
      {number('totalAmountValue', 12)}
      {' '}
    </span>
    {text('totalAmountText', 'movies found')}
  </div>
);
