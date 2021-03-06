import './ResultCount.less';

import React from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';

// PATTERN: Use Reselect in Redux to Avoid Frequent Re-render
const totalAmountSelector = (totalAmount) => totalAmount;
const getTotalAmount = createSelector(
  totalAmountSelector,
  (totalAmount) => totalAmount
);
const ResultCount = () => {
  const totalAmount = useSelector((state) => state.movie.totalAmount);

  return (
    <div className="resultCountContainer">
      <span className="resultCount">
        {getTotalAmount(totalAmount) || 0}
        {' '}
      </span>
      <span>movies found</span>
    </div>
  );
};

export default ResultCount;
