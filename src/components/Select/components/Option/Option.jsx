/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types';
import React from 'react';
import {components} from 'react-select';

const Option = (props) => {
  const {isSelected, label} = props;

  return (
    <div>
      {/* // PATTERN: Spreading props on DOM elements */}
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => null}
        />
        {' '}
        <label>{label}</label>
      </components.Option>
    </div>
  );
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default Option;
