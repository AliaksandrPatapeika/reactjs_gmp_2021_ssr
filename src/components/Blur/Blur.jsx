import './Blur.less';

import PropTypes from 'prop-types';
import React from 'react';

const Blur = ({children}) => <div className="blur">{children}</div>;

Blur.propTypes = {
  children: PropTypes.node.isRequired
};

export default Blur;
