import './ResultCount.less';

import React from 'react';
import {useSelector} from 'react-redux';

const ResultCount = () => {
  const totalAmount = useSelector((state) => state.movie.totalAmount);

  return (
    <div className="resultCountContainer">
      <span className="resultCount">
        {totalAmount || 0}
        {' '}
      </span>
      <span>movies found</span>
    </div>
  );
};

export default ResultCount;
