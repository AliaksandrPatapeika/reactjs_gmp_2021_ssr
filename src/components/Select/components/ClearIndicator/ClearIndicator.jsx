import React from 'react';
import {components} from 'react-select';

const ClearIndicator = (props) => (
  // PATTERN: Spreading props on DOM elements
  <components.ClearIndicator {...props}>
    <i className="fa fa-times" aria-hidden="true" />
  </components.ClearIndicator>
);

export default ClearIndicator;
