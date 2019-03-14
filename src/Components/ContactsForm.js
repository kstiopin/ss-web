import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

class ContactsForm extends Component {
  state = { firstname: '', lastname: '', phone: '', address: '' };

  componentDidMount() {
    const { user } = this.props;
    const { firstname, lastname, phone, address } = user;
    this.setState({ firstname, lastname, phone, address });
  }

  handleContactsSave = () => {
    const { contactsSave } = this.props;
    contactsSave(this.state);
  }

  setValue = (key, value) => {
    const newState = this.state;
    newState[key] = value;
    this.setState(newState);
  }

  render() {
    const { close } = this.props;
    const { firstname, lastname, phone, address } = this.state;

    return (
      <Dialog onClose={ close } open aria-labelledby='contacts-dialog-title'>
        <DialogTitle id='contacts-dialog-title' onClose={ close }>Контактная информация</DialogTitle>
        <DialogContent>
          <TextField defaultValue={ firstname } floatingLabelText='Имя' onChange={ (ev, value) => this.setValue('firstname', value) } />
          <TextField defaultValue={ lastname } floatingLabelText='Фамилия' onChange={ (ev, value) => this.setValue('lastname', value) } />
          <TextField defaultValue={ phone } floatingLabelText='Телефон' onChange={ (ev, value) => this.setValue('phone', value) } />
          <TextField defaultValue={ address } floatingLabelText='Адрес' onChange={ (ev, value) => this.setValue('address', value) } />
        </DialogContent>
        <DialogActions>
          <Button label='Сохранить' key='save' onClick={ this.handleContactsSave } primary />
        </DialogActions>
      </Dialog>);
  }
}

ContactsForm.propTypes = {
  contactsSave: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default ContactsForm;
