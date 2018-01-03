import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render () {
    const { user } = this.props;
    console.log('App', 'RENDER', { user });

    return (
      <div>SmartSales</div>);
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(App);
