import './ModalWindow.less';

import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {closeModal} from '../../actions/movies';
import Blur from '../../components/Blur';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import AddMovie from './forms/AddMovie';
import DeleteMovie from './forms/DeleteMovie';
import EditMovie from './forms/EditMovie';

const ModalWindow = () => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const activeModalMovie = useSelector((state) => state.movie.activeModalMovie);
  const dispatch = useDispatch();
  const modalWindowCloseButtonRef = useRef();

  const closeModalWindow = () => {
    dispatch(closeModal());
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        dispatch(closeModal());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (activeModalWindow) {
      window.addEventListener('keydown', handleKeyDown);
      modalWindowCloseButtonRef.current.focus();
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalWindow, handleKeyDown]);

  return activeModalWindow && (
  <div className="modalWindowContainer">
    <Blur>
      <Logo />
      <div className="modalWindow">
        <Button
          className="closeButton"
          onClick={closeModalWindow}
          ref={modalWindowCloseButtonRef}
        >
          <i className="fa fa-times" aria-hidden="true" />
        </Button>
        <div className="modalBody">
          <AddMovie formTitle="ADD MOVIE" />
          {activeModalMovie && (
          <>
            <EditMovie formTitle="EDIT MOVIE" movie={activeModalMovie} />
            <DeleteMovie formTitle="DELETE MOVIE" movieId={activeModalMovie.id} />
          </>
          )}
        </div>
      </div>
    </Blur>
  </div>
  );
};

export default ModalWindow;
