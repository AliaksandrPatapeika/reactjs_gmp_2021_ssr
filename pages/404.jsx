import './PageNotFound.less';

import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Button from '../src/components/Button';
import Footer from '../src/containers/Footer';
import HeaderTop from '../src/containers/HeaderTop';

const PageNotFound = () => (
  <>
    <Head>
      <title>Page Not Found</title>
      <link rel="icon" href="/img/favicon.ico" />
    </Head>
    <div className="pageNotFoundContainer">
      <HeaderTop hideButton />
      <div className="pageNotFoundContent">
        <h1 className="title">Page Not Found</h1>
        <img
          src="/img/errorPage.png"
          alt="page not found"
          className="errorPageImage"
        />
        <Link href="/">
          <Button className="goBackButton" title="GO BACK TO HOME" />
        </Link>
      </div>
    </div>
    <Footer />
  </>
);

export default PageNotFound;
