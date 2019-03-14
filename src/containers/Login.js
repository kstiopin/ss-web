import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { validateEmail } from '../helpers';
// Actions
import { emailLoginAction } from '../actions';

class Login extends Component {
  state = { email: '', emailErrorText: '', pass: '', passErrorText: '' }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value, emailErrorText: '', passErrorText: '' });
  };

  handleAuth = () => {
    const { sendEmailLoginAction } = this.props;
    const { email, pass } = this.state;
    if (pass.length === 0) {
      this.setState({ passErrorText: 'Password cannot be empty' });
    } else {
      if (email.length === 0) {
        this.setState({ emailErrorText: 'Email is required' });
      } else {
        const valid = validateEmail(email);
        // console.log('Login', 'handleAuth', valid, email, pass);
        if (!valid) {
          this.setState({ emailErrorText: 'Email is invalid!' });
        } else {
          sendEmailLoginAction(email, pass);
        }
      }
    }
  }

  render() {
    const { emailErrorText, passErrorText } = this.state;

    return (
      <Dialog open aria-labelledby='login-dialog-title'>
        <DialogTitle id='login-dialog-title'>Авторизация</DialogTitle>
        <DialogContent>
          <TextField error={ (emailErrorText !== '') } helperText={ emailErrorText } fullWidth label='Email address' onChange={ this.handleChange('email') } type='email' />
          <TextField error={ (passErrorText !== '') } helperText={ passErrorText } fullWidth label='Password' onChange={ this.handleChange('pass') } type='password' />
        </DialogContent>
        <DialogActions>
          <Button onClick={ this.handleAuth } color='primary'>Вход</Button>
        </DialogActions>
      </Dialog>);
  }
}

Login.propTypes = {
  sendEmailLoginAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({ sendEmailLoginAction: emailLoginAction }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
