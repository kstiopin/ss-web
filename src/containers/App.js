import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';

class App extends Component {
  render () {
    const { user } = this.props;
    console.log('App', 'RENDER', { user });
    if (!user.hasOwnProperty('id')) {
      return (<Login />);
    }

    return (
      <div>SmartSales</div>);
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(App);
