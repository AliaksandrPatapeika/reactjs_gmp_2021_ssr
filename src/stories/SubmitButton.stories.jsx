import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

export default {
  title: 'Submit button',
  decorators: [withKnobs]
};

export const withAButton = () => (
  <button type="button" disabled={boolean('disabled', false)}>
    {text('label', 'SUBMIT')}
  </button>
);
