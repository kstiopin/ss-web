import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Login from './Login';
import Dashboard from "./Dashboard";

const App = ({ user }) => (!user || !user.hasOwnProperty('id')) ? <Login /> : <Dashboard />;

App.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(App);
