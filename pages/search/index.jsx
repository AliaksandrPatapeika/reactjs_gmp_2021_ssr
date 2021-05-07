import Head from 'next/head';
import React from 'react';

import Footer from '../../src/containers/Footer';
import Header from '../../src/containers/Header';
import Loading from '../../src/containers/Loading';
import Main from '../../src/containers/Main';
import ModalWindow from '../../src/containers/ModalWindow';

const SearchPage = () => (
  // PATTERN: Use Fragments to Avoid Additional HTML Element Wrappers
  <>
    <Head>
      <title>Search Page</title>
      <link rel="icon" href="/img/favicon.ico" />
    </Head>
    <Loading />
    <Header />
    <Main />
    <ModalWindow />
    <Footer />
  </>
);

export default SearchPage;
