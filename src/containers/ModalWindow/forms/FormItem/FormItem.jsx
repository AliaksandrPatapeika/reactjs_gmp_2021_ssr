import {Field} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import {getLabelFromName, getPlaceholderFromName} from '../../../../utils';

function FormItem(props) {
  const {
    label, className, name, placeholder, type, required, errorMessage, ...rest
  } = props;

  return (
    <div className="formItem">
      <label htmlFor={name} className={required ? 'label required-label' : 'label'}>
        {label || getLabelFromName(name)}
      </label>
      <Field
        className={className}
        name={name}
        type={type}
        id={name}
        required={required}
        placeholder={placeholder || getPlaceholderFromName(name)}
        autoComplete="off"
        {...rest}
      />
      {errorMessage ? <span className="validationErrorMessage">{errorMessage}</span> : null}
    </div>
  );
}

FormItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string
};

FormItem.defaultProps = {
  className: 'input',
  type: 'text',
  label: '',
  placeholder: '',
  required: false,
  errorMessage: ''
};

export default FormItem;
