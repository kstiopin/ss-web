import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
const Login = lazy(() => import('./Login'));
const Dashboard = lazy(() => import('./Dashboard'));

const App = ({ user }) => (
  <Suspense fallback={ () => 'Loading...' }>
    { (!user || !user.hasOwnProperty('id')) ? <Login /> : <Dashboard /> }
  </Suspense>);

App.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(App);
