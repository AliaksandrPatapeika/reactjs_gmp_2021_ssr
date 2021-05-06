import {text, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

export default {
  title: 'Search input',
  decorators: [withKnobs]
};

export const withAButton = () => (
  <input
    placeholder={text('placeholder', 'What do you want to watch?')}
    value={text('value', 'movie')}
    title={text('title', 'movie')}
  />
);
