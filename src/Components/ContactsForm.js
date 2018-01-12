import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, RaisedButton, TextField } from 'material-ui';

class ContactsForm extends Component {
  componentWillMount() {
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
      <Dialog actions={ [<RaisedButton label='Сохранить' primary onClick={ this.handleContactsSave } />] } bodyClassName='contacts-form' modal onRequestClose={ close } open title='Контактная информация'>
        <TextField defaultValue={ firstname } floatingLabelText='Имя' onChange={ (ev, value) => this.setValue('firstname', value) } />
        <TextField defaultValue={ lastname } floatingLabelText='Фамилия' onChange={ (ev, value) => this.setValue('lastname', value) } />
        <TextField defaultValue={ phone } floatingLabelText='Телефон' onChange={ (ev, value) => this.setValue('phone', value) } />
        <TextField defaultValue={ address } floatingLabelText='Адрес' onChange={ (ev, value) => this.setValue('address', value) } />
      </Dialog>);
  }
}

export default ContactsForm;
