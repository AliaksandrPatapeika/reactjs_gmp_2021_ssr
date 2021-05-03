import './UseSearch.less';

import React from 'react';
import {useSelector} from 'react-redux';

const UseSearch = () => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);

  return !activeModalWindow && (
  <div className="useSearchContainer">
    <h1 className="title">Use Search to find movies</h1>
  </div>
  );
};

export default UseSearch;
