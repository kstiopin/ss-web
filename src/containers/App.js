import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getUserDetailsAction } from '../actions';
// Components
import Login from './Login';
import ContactsForm from '../components/ContactsForm';

class App extends Component {
  state = { showContacts: false }

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
    } else if (user.hasOwnProperty('id') && user.hasOwnProperty('firstname') && !this.props.user.hasOwnProperty('firstname')) {
      this.checkUserDetails(user);
    }
  }

  checkUserDetails = (user) => {
    const { firstname, lastname, phone, address } = user;
    if (!firstname || !(firstname.length > 0) || !lastname || !(lastname.length > 0) || !phone || !(phone.length > 0) || !address || !(address.length > 0)) {
      this.setState({ showContacts: true });
    }
  }

  toggleContacts = () => this.setState(prevState => ({ showContacts: !prevState.showContacts }))

  contactsSave = (details) => {
    // save user details
  }

  render () {
    const { user } = this.props;
    console.log('App', 'RENDER', user);
    if (!user.hasOwnProperty('id')) {
      return (<Login />);
    } else if (!user.hasOwnProperty('firstname')) {
      return null;
    }
    const { showContacts } = this.state;

    return (
      <div>
        <h1>SmartSales</h1>
        { showContacts && <ContactsForm contactsSave={ this.contactsSave } close={ this.toggleContacts } user={ user } /> }
      </div>);
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(App);
