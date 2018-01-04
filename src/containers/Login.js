import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, RaisedButton, TextField } from 'material-ui';

import { validateEmail } from '../helpers';

// import { emailLoginAction } from '../actions';

import Login from './Login';

class App extends Component {
  state = { email: '', emailErrorText: '', pass: '', passErrorText: '' }

  setEmail = (ev, email) => this.setState({ email, emailErrorText: '' })

  setPass = (ev, pass) => this.setState({ pass, passErrorText: '' })

  handleAuth = () => {
    const { email, pass } = this.state;
    if (pass.length === 0) {
      this.setState({ passErrorText: 'Password cannot be empty' });
    } else {
      if (email.length === 0) {
        this.setState({ emailErrorText: 'Email is required' });
      } else {
        const valid = validateEmail(email);
        // console.log('Login', 'handleAuth', valid, email);
        if (!valid) {
          this.setState({ emailErrorText: 'Email is invalid!' });
        } else {
          // handle auth
          // const { dispatch } = this.props;
          // dispatch(emailLoginAction(email, pass));
        }
      }
    }
  }

  render() {
    const { emailErrorText, passErrorText } = this.state;

    return (
      <Dialog actions={ [<RaisedButton label='Вход' primary onClick={ this.handleAuth } />] } bodyClassName='login-form' modal open title='Авторизация'>
        <TextField defaultValue='' errorText={ emailErrorText } floatingLabelText='Email address' onChange={ this.setEmail } />
        <TextField defaultValue='' errorText={ passErrorText } floatingLabelText='Password' onChange={ this.setPass } />
      </Dialog>);
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
