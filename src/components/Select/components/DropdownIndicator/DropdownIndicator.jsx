import React from 'react';
import {components} from 'react-select';

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <i className="fa fa-caret-down" aria-hidden="true" />
  </components.DropdownIndicator>
);

export default DropdownIndicator;
