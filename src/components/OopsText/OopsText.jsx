import './OopsText.less';

import PropTypes from 'prop-types';
import React from 'react';

const OopsText = ({errorMessage}) => (
  <div className="oopsTextContainer">
    {errorMessage && (
    <div className="oopsTextErrorMessage">{errorMessage}</div>
    )}
    <div>Oops, something went wrong...</div>
    <div>We are doing our best to fix the issue</div>
  </div>
);

OopsText.propTypes = {
  errorMessage: PropTypes.string
};

OopsText.defaultProps = {
  errorMessage: ''
};

export default OopsText;
