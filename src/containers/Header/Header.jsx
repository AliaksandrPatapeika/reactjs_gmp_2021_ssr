import React from 'react';
import {useSelector} from 'react-redux';

import Blur from '../../components/Blur';
import HeaderMain from '../HeaderMain';
import HeaderTop from '../HeaderTop';

const Header = () => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);

  return !activeModalWindow && (
  <header className="headerContainer">
    <Blur>
      <HeaderTop />
      <HeaderMain />
    </Blur>
  </header>
  );
};

export default Header;
