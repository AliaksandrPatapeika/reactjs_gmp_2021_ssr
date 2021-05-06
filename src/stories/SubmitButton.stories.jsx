import {
  boolean, color, text, withKnobs
} from '@storybook/addon-knobs';
import React from 'react';

export default {
  title: 'Submit button',
  decorators: [withKnobs]
};

export const withAButton = () => (
  <button
    type="button"
    disabled={boolean('disabled', false)}
    style={{
      color: color('color', 'salmon'),
      backgroundColor: color('backgroundColor', 'lightgray')
    }}
  >
    {text('label', 'SUBMIT')}
  </button>
);
