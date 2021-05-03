import './HeaderTop.less';

import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {closeMovieDetails, showModal} from '../../actions/movies';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import {getQueryString} from '../../utils';

const HeaderTop = ({hideButton}) => {
  const activeMovieDetailsMovie = useSelector((state) => state.movie.activeMovieDetailsMovie);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const router = useRouter();
  const returnToMainButtonRef = useRef();

  const onClickHandler = () => {
    dispatch(closeMovieDetails());
    router.push({
      pathname: '/search',
      search: getQueryString(query)
    });
  };

  const showAddMovieWindow = () => {
    dispatch(showModal('addMovie'));
  };

  useEffect(() => {
    if (activeMovieDetailsMovie) {
      returnToMainButtonRef.current.focus();
    }
  }, [activeMovieDetailsMovie]);

  return (
    <div className="headerTopContainer">
      <Logo />
      {!hideButton && (
      <>
        {activeMovieDetailsMovie ? (
          <Button
            className="returnToMainButton"
            onClick={onClickHandler}
            ref={returnToMainButtonRef}
          >
            <i className="fa fa-search fa-flip-horizontal" aria-hidden="true" />
          </Button>
        ) : (
          <Button
            className="addMovieButton"
            onClick={showAddMovieWindow}
            title="+ ADD MOVIE"
          />
        )}
      </>
      )}
    </div>
  );
};

HeaderTop.propTypes = {
  hideButton: PropTypes.bool
};

HeaderTop.defaultProps = {
  hideButton: false
};

export default HeaderTop;
