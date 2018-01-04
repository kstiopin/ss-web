import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, RaisedButton, TextField } from 'material-ui';

import { validateEmail } from '../helpers';

import Login from './Login';

class App extends Component {
  state = { email: '', errorText: '' }

  setEmail = (ev, email) => this.setState({ email, errorText: '' })

  handleAuth = () => {
    const { email } = this.state;
    if (email.length === 0) {
      this.setState({ errorText: 'Email is required' });
    } else {
      const valid = validateEmail(email);
      // console.log('Login', 'handleAuth', valid, email);
      if (!valid) {
        this.setState({ errorText: 'Email is invalid!' });
      } else {
        // handle auth
      }
    }
  }

  render () {
    const { errorText } = this.state;

    return (
      <Dialog actions={ [<RaisedButton label='Вход' primary onClick={ this.handleAuth } />] } modal open title='Авторизация'>
        <TextField defaultValue='' errorText={ errorText } floatingLabelText='Email address' onChange={ this.setEmail } />
      </Dialog>);
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
