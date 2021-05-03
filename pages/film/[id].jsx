import React from 'react';

import Footer from '../../src/containers/Footer';
import Loading from '../../src/containers/Loading';
import Main from '../../src/containers/Main';
import MovieDetails from '../../src/containers/MovieDetails';

const MovieDetailsPage = () => (
  <>
    <Loading />
    <MovieDetails />
    <Main />
    <Footer />
  </>
);

export default MovieDetailsPage;
