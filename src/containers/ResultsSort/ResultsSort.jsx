import './ResultsSort.less';

import {assign, filter, head} from 'lodash';
import {useRouter} from 'next/router';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setSortBy, setSortOrder} from '../../actions/movies';
import Button from '../../components/Button';
import Select from '../../components/Select';
import SortIcon from '../../components/SortIcon';
import {SortBy} from '../../constants';
import {getQueryString} from '../../utils';

const ResultsSort = () => {
  const sortBy = useSelector((state) => state.query.sortBy);
  const sortOrder = useSelector((state) => state.query.sortOrder);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = router.query;

  const getSortValue = () => head(
    filter(SortBy, (option) => option.value === sortBy)
  );

  const setSortByHandler = (selectItem) => {
    /* for the sorting when the film details page is open */
    if (id) {
      dispatch(setSortBy(selectItem.value));
    } else {
      router.push({
        pathname: '/search',
        search: getQueryString(assign(query, {sortBy: selectItem.value}))
      });
    }
  };

  const toggleSortOrder = () => (sortOrder === 'desc' ? 'asc' : 'desc');

  const setSortOrderHandler = () => {
    /* for the sorting order when the film details page is open */
    if (id) {
      dispatch(setSortOrder(toggleSortOrder()));
    } else {
      router.push({
        pathname: '/search',
        search: getQueryString(assign(query, {sortOrder: toggleSortOrder()}))
      });
    }
  };

  return (
    <div className="resultsSortContainer">
      <div className="sortBy">SORT BY</div>
      <Select
        className="select resultSortSelect"
        classNamePrefix="select"
        id="resultSort"
        options={SortBy}
        onChange={setSortByHandler}
        value={getSortValue()}
      />
      <Button className="arrow" onClick={setSortOrderHandler}>
        <SortIcon sortOrder={sortOrder} />
      </Button>
    </div>
  );
};

export default ResultsSort;
