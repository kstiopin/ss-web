import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getUserDetailsAction } from '../actions';
// Components
import Login from './Login';

class App extends Component {
  componentWillMount() {
    const { dispatch, user } = this.props;
    if (user.hasOwnProperty('id') && (user.id > 0)) {
      dispatch(getUserDetailsAction(user.id));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, user } = nextProps;
    if ((!this.props.user.hasOwnProperty('id') && user.hasOwnProperty('id')) || (this.props.user.id !== user.id)) {
      dispatch(getUserDetailsAction(user.id));
    }
  }

  render () {
    const { user } = this.props;
    console.log('App', 'RENDER', user);
    if (!user.hasOwnProperty('id')) {
      return (<Login />);
    } else if (!user.hasOwnProperty('firstname')) {
      return null;
    }

    return (
      <div>
        <h1>SmartSales</h1>
      </div>);
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(App);
