import Head from 'next/head';
import React from 'react';

import Footer from '../../src/containers/Footer';
import Loading from '../../src/containers/Loading';
import Main from '../../src/containers/Main';
import MovieDetails from '../../src/containers/MovieDetails';

const MovieDetailsPage = () => (
  // PATTERN: Use Fragments to Avoid Additional HTML Element Wrappers
  <>
    <Head>
      <title>Movie Details Page</title>
      <link rel="icon" href="/img/favicon.ico" />
    </Head>
    <Loading />
    <MovieDetails />
    <Main />
    <Footer />
  </>
);

export default MovieDetailsPage;
