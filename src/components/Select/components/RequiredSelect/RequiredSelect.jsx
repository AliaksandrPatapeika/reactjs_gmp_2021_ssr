import './RequiredSelect.less';

import {noop} from 'lodash';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

/* https://github.com/JedWatson/react-select/issues/3140#issuecomment-747969143 */
const RequiredSelect = ({
  SelectComponent, value, onChange, required, isDisabled, ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const onChangeHandler = (inpValue, actionMeta) => {
    onChange(inpValue, actionMeta);
    setInputValue(inpValue);
  };

  const getValue = () => {
    if (value !== undefined) return value;
    return inputValue || '';
  };

  const enableRequired = !isDisabled;

  return (
    <div className="requiredSelectContainer">
      <SelectComponent
        // PATTERN: Spreading props on DOM elements
        {...props}
        value={getValue()}
        onChange={onChangeHandler}
      />
      {enableRequired && (
      <input
        tabIndex={-1}
        autoComplete="off"
        style={{
          opacity: 0,
          width: '100%',
          height: 0,
          position: 'absolute'
        }}
        value={getValue()}
        onChange={noop}
        required={required}
      />
      )}
    </div>
  );
};

RequiredSelect.propTypes = {
  // react-select component class (e.g. Select, Creatable, Async)
  SelectComponent: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  isDisabled: PropTypes.bool
};

RequiredSelect.defaultProps = {
  value: [],
  onChange: noop,
  required: false,
  isDisabled: false
};

export default RequiredSelect;
