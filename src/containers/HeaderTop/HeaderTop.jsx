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
    router.push({
      pathname: '/search',
      search: getQueryString(query)
    })
      .then(() => {
        dispatch(closeMovieDetails());
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
        // PATTERN: Use Fragments to Avoid Additional HTML Element Wrappers
        <>
          {activeMovieDetailsMovie ? (
            <Button
              className="returnToMainButton"
              // PATTERN: Avoid Inline Function Definition in the Render Function
              onClick={onClickHandler}
              ref={returnToMainButtonRef}
            >
              <i className="fa fa-search fa-flip-horizontal" aria-hidden="true" />
            </Button>
          ) : (
            <Button
              className="addMovieButton"
              // PATTERN: Avoid Inline Function Definition in the Render Function
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
