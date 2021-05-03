import './MovieReleaseDate.less';

import PropTypes from 'prop-types';
import React from 'react';

const MovieReleaseDate = ({releaseDate}) => <div className="movieReleaseDate" title={`Release date: ${releaseDate}`}>{new Date(releaseDate).getFullYear()}</div>;

MovieReleaseDate.propTypes = {
  releaseDate: PropTypes.string.isRequired
};

export default MovieReleaseDate;
