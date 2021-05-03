import './MovieGenres.less';

import PropTypes from 'prop-types';
import React from 'react';

const MovieGenres = ({genres}) => <div className="movieGenres">{genres}</div>;

MovieGenres.propTypes = {
  genres: PropTypes.string.isRequired
};

export default MovieGenres;
