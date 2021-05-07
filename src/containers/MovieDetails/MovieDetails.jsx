import React from 'react';
import styled from 'styled-components';

import Blur from '../../components/Blur';
import MovieDetailsContent from '../../components/MovieDetailsContent';
import HeaderTop from '../HeaderTop/HeaderTop';

const MovieDetailsWrapper = styled.div`
  margin-bottom: 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/img/bgImage.jpg');
  background-size: cover;
`;

const MovieDetails = () => (
  <MovieDetailsWrapper>
    <Blur>
      <HeaderTop />
      <MovieDetailsContent />
    </Blur>
  </MovieDetailsWrapper>
);

export default MovieDetails;
