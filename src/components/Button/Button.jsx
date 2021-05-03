/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';

const Button = React.forwardRef(({
  type, id, className, onClick, disabled, title, children
}, ref) => (
  <button type={type} disabled={disabled} id={id} ref={ref} className={className} onClick={onClick}>
    {title}
    {children}
  </button>
));

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  type: 'button',
  id: null,
  className: '',
  onClick: () => {},
  disabled: false,
  title: '',
  children: ''
};

export default Button;
