import './MovieDetailsLabel.less';

import PropTypes from 'prop-types';
import React from 'react';

const MovieDetailsLabel = ({label, value}) => (
  <div className="movieDetailsLabel">
    {label}
    {': '}
    <span className="movieDetailsValue">{value}</span>
  </div>
);

MovieDetailsLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default MovieDetailsLabel;
