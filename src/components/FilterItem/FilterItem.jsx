import './FilterItem.less';

import PropTypes from 'prop-types';
import React, {useMemo} from 'react';

const FilterItem = ({label, isActive, setFilter}) => {
  const className = useMemo(() => (isActive ? 'filterItem active' : 'filterItem'), [isActive]);

  return (
    <li role="menuitem" tabIndex="0" className={className} onClick={setFilter} onKeyPress={setFilter}>
      {label}
    </li>
  );
};

FilterItem.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default FilterItem;
