/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import OopsText from '../../components/OopsText';

class ErrorBoundary extends Component {
	state = {
	  hasError: false
	};

	static getDerivedStateFromError() {
	  return {hasError: true};
	}

	componentDidCatch(error, errorInfo) {
	  console.log('error: ', error);
	  console.log('errorInfo: ', errorInfo);
	}

	render() {
	  const {hasError} = this.state;
	  const {children, errorMessage} = this.props;

	  return hasError || errorMessage ? <OopsText errorMessage={errorMessage} /> : children;
	}
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  errorMessage: state.movie.errorMessage
});

export default connect(mapStateToProps)(ErrorBoundary);
