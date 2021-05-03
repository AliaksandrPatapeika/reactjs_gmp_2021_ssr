import './MovieTitle.less';

import PropTypes from 'prop-types';
import React from 'react';

const MovieTitle = ({title}) => <div className="movieTitle">{title}</div>;

MovieTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default MovieTitle;
