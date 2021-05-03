import PropTypes from 'prop-types';
import React from 'react';
import {components} from 'react-select';

const allOption = {
  label: 'Select all',
  value: '*'
};

const ValueContainer = ({children, ...props}) => {
  const {getValue} = props;
  const currentValues = getValue();

  let toBeRendered = children;

  if (currentValues.some((val) => val.value === allOption.value)) {
    toBeRendered = [[children[0][0]], children[1]];
  }

  return (
    <components.ValueContainer {...props}>
      {toBeRendered}
    </components.ValueContainer>
  );
};

ValueContainer.propTypes = {
  getValue: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default ValueContainer;
