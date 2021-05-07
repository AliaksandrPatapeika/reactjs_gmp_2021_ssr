import Head from 'next/head';
import React from 'react';

import UseSearch from '../src/components/UseSearch';
import Footer from '../src/containers/Footer';
import Header from '../src/containers/Header';
import ModalWindow from '../src/containers/ModalWindow';

const HomePage = () => (
  // PATTERN: Use Fragments to Avoid Additional HTML Element Wrappers
  <>
    <Head>
      <title>Home Page</title>
      <link rel="icon" href="/img/favicon.ico" />
    </Head>
    <Header />
    <UseSearch />
    <ModalWindow />
    <Footer />
  </>
);

export default HomePage;
