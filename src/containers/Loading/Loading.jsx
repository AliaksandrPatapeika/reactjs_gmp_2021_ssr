import './Loading.less';

import React from 'react';
import ReactLoading from 'react-loading';
import {useSelector} from 'react-redux';

const Loading = () => {
  const isLoading = useSelector((state) => state.movie.isLoading);

  return isLoading && (
  <ReactLoading className="loadingSpinner" type="spinningBubbles" color="#f65261" />
  );
};

export default Loading;
