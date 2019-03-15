import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import Login from './Login';
import Dashboard from './Dashboard';

// TODO: rework Dashboard to be a companies list available before Logging in
const App = ({ user }) => ((!user || !user.hasOwnProperty('id')) ? <Login /> : <Dashboard />);

App.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(App);
