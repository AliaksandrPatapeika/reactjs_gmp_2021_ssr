import Document, {
  Head, Html, Main, NextScript
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {...initialProps};
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="ReactJS Global Mentoring Program 2021" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
