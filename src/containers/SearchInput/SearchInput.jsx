import './SearchInput.less';

import PropTypes from 'prop-types';
import React from 'react';

const SearchInput = ({value, onChange}) => (
  <input
    className="searchInput"
    placeholder="What do you want to watch?"
    autoComplete="off"
    value={value}
    onChange={onChange}
  />
);

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchInput;
