import './App.less';

import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';

import ErrorBoundary from '../src/containers/ErrorBoundary/ErrorBoundary';
import store from '../src/store';

const App = ({Component, pageProps}) => (
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired
};

export default App;
