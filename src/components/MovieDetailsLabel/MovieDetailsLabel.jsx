import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const MovieDetailsLabelWrapper = styled.div`
  margin-bottom: 4px;
  color: #f65261;
`;
const MovieDetailsValue = styled.span`
  color: #ffffff;
`;

const MovieDetailsLabel = ({label, value}) => (
  <MovieDetailsLabelWrapper>
    {label}
    {': '}
    <MovieDetailsValue>{value}</MovieDetailsValue>
  </MovieDetailsLabelWrapper>
);

MovieDetailsLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default MovieDetailsLabel;
