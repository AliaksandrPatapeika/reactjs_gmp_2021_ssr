import {filter, includes} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';

import ClearIndicator from './components/ClearIndicator';
import DropdownIndicator from './components/DropdownIndicator';
import MultiValue from './components/MultiValue';
import Option from './components/Option';
import RequiredSelect from './components/RequiredSelect';
import ValueContainer from './components/ValueContainer';

/* https://github.com/JedWatson/react-select/issues/3543#issuecomment-565733597 */
const Select = (props) => {
  const {isMulti, allowSelectAll} = props;

  if (isMulti && allowSelectAll) {
    return (
      <RequiredSelect
        // PATTERN: Spreading props on DOM elements
        {...props}
        SelectComponent={ReactSelect}
        options={[props.allOption, ...props.options]}
        components={{
				  ClearIndicator,
				  DropdownIndicator,
				  MultiValue,
				  Option,
				  ValueContainer
        }}
        onChange={(selected, event) => {
				  if (selected !== null && selected.length > 0) {
				    if (selected[selected.length - 1].value === props.allOption.value) {
				      return props.onChange([props.allOption, ...props.options]);
				    }
				    let result = [];

				    if (selected.length === props.options.length) {
				      if (includes(selected, props.allOption)) {
				        result = filter(selected, (option) => option.value !== props.allOption.value);
				      } else if (event.action === 'select-option') {
				        result = [props.allOption, ...props.options];
				      }
				      return props.onChange(result);
				    }
				  }

				  return props.onChange(selected);
        }}
      />
    );
  }

  return (
    <ReactSelect
      {...props}
      components={{
			  DropdownIndicator
      }}
    />
  );
};

Select.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  value: PropTypes.instanceOf(Object),
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
  allowSelectAll: PropTypes.bool,
  allSelectedLabel: PropTypes.string,
  allOption: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

Select.defaultProps = {
  allSelectedLabel: 'All is selected',
  isMulti: false,
  allowSelectAll: false,
  value: null,
  allOption: {
    label: 'Select all',
    value: '*'
  }
};

export default Select;
