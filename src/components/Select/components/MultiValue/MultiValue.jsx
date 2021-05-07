import PropTypes from 'prop-types';
import React from 'react';
import {components} from 'react-select';

const allOption = {
  label: 'Select all',
  value: '*'
};

const MultiValue = (props) => {
  const {selectProps: {allSelectedLabel}, data: {label, value}} = props;

  let labelToBeDisplayed = `${label}, `;

  if (value === allOption.value) {
    // get from the Select props
    labelToBeDisplayed = allSelectedLabel;
  }
  return (
    // PATTERN: Spreading props on DOM elements
    <components.MultiValue {...props}>
      <span>{labelToBeDisplayed}</span>
    </components.MultiValue>
  );
};

MultiValue.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  selectProps: PropTypes.shape({
    allSelectedLabel: PropTypes.string.isRequired
  }).isRequired
};

export default MultiValue;
