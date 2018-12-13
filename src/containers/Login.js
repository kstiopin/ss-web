import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog, RaisedButton, TextField } from 'material-ui';

import { validateEmail } from '../helpers';

import { emailLoginAction } from '../actions';

class Login extends Component {
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
          const { emailLoginAction } = this.props;
          emailLoginAction(email, pass);
        }
      }
    }
  }

  render() {
    const { emailErrorText, passErrorText } = this.state;

    return (
      <Dialog actions={ [<RaisedButton label='Вход' key='enter' onClick={ this.handleAuth } primary />] } bodyClassName='login-form' modal open title='Авторизация'>
        <TextField defaultValue='' errorText={ emailErrorText } floatingLabelText='Email address' onChange={ this.setEmail } />
        <TextField defaultValue='' errorText={ passErrorText } floatingLabelText='Password' onChange={ this.setPass } />
      </Dialog>);
  }
}

Login.propTypes = {
  emailLoginAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({ emailLoginAction }, dispatch);
const mapStateToProps = () => ({});

export default connect(mapDispatchToProps, mapStateToProps)(Login);
