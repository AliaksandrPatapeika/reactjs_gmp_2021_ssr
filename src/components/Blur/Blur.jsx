import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BlurWrapper = styled.div`
  height: 100%;
  backdrop-filter: blur(5px);
  padding: 22px 62px 0;
`;

const Blur = ({children}) => (
  <BlurWrapper>{children}</BlurWrapper>
);

Blur.propTypes = {
  children: PropTypes.node.isRequired
};

export default Blur;
