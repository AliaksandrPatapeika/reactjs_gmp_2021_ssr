import './NoMoviesFound.less';

import React from 'react';
import {useSelector} from 'react-redux';

const NoMoviesFound = () => {
  const totalAmount = useSelector((state) => state.movie.totalAmount);

  return totalAmount === 0 && (
  <div className="noMoviesFoundContainer">
    <h1 className="title">No Movie Found</h1>
  </div>
  );
};

export default NoMoviesFound;
