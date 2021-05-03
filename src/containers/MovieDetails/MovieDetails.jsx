import './MovieDetails.less';

import React from 'react';

import Blur from '../../components/Blur';
import MovieDetailsContent from '../../components/MovieDetailsContent';
import HeaderTop from '../HeaderTop/HeaderTop';

const MovieDetails = () => (
  <div className="headerContainer movieDetailsContainer">
    <Blur>
      <HeaderTop />
      <MovieDetailsContent />
    </Blur>
  </div>
);

export default MovieDetails;
