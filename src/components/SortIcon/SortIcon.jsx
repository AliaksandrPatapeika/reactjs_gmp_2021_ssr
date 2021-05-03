import PropTypes from 'prop-types';
import React from 'react';

const SortIcon = ({sortOrder}) => (sortOrder === 'asc'
		  ? <i className="fa fa-sort-amount-asc" aria-hidden="true" />
		  : <i className="fa fa-sort-amount-desc" aria-hidden="true" />);

SortIcon.propTypes = {
  sortOrder: PropTypes.string.isRequired
};

export default SortIcon;
