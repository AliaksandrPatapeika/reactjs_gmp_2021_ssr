import './Menu.less';

import React from 'react';

import ResultsFilter from '../ResultsFilter';
import ResultsSort from '../ResultsSort';

const Menu = () => (
  <div className="menuContainer">
    <ResultsFilter />
    <ResultsSort />
  </div>
);

export default Menu;
