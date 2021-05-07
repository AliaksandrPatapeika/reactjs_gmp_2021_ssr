import './MovieCardMenu.less';

import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useRef} from 'react';

import Button from '../../components/Button';

const MovieCardMenu = ({
  showSubMenu, closeSubMenu, showEditMovieWindow, showDeleteMovieWindow
}) => {
  const movieCardMenuCloseButtonRef = useRef();
  /* https://gist.github.com/pstoica/4323d3e6e37e8a23dd59 */
  const handleBlur = (e) => {
    const {currentTarget} = e;

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // Invoke a callback here
        closeSubMenu();
      }
    }, 0);
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        closeSubMenu();
      }
    },
    [closeSubMenu]
  );

  useEffect(() => {
    if (showSubMenu) {
      window.addEventListener('keydown', handleKeyDown);
      movieCardMenuCloseButtonRef.current.focus();
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showSubMenu, handleKeyDown]);

  return showSubMenu && (
  <div className="movieCardMenuContainer" onBlur={handleBlur}>
    {/* // PATTERN: Avoid Inline Function Definition in the Render Function */}
    <Button className="closeButton" ref={movieCardMenuCloseButtonRef} onClick={closeSubMenu}>
      <i className="fa fa-times" aria-hidden="true" />
    </Button>
    <nav>
      <ul>
        <li
          role="menuitem"
          tabIndex="0"
          className="menuItem"
          // PATTERN: Avoid Inline Function Definition in the Render Function
          onClick={showEditMovieWindow}
          onKeyPress={showEditMovieWindow}
        >
          Edit
        </li>
        <li
          role="menuitem"
          tabIndex="0"
          className="menuItem"
          // PATTERN: Avoid Inline Function Definition in the Render Function
          onClick={showDeleteMovieWindow}
          onKeyPress={showDeleteMovieWindow}
        >
          Delete
        </li>
      </ul>
    </nav>
  </div>
  );
};

MovieCardMenu.propTypes = {
  showSubMenu: PropTypes.bool.isRequired,
  closeSubMenu: PropTypes.func.isRequired,
  showEditMovieWindow: PropTypes.func.isRequired,
  showDeleteMovieWindow: PropTypes.func.isRequired
};

export default MovieCardMenu;
