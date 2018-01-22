import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Avatar, FontIcon, List, ListItem, Paper } from 'material-ui';

// Actions
import { getUserDetailsAction, userDetailsUpdateAction } from '../actions';
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
    const { dispatch } = this.props;
    dispatch(userDetailsUpdateAction(details));
    this.toggleContacts();
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
    const title = 'SmartSales';

    return (
      <div>
        <AppBar
          iconElementRight={ <div className='user-info'>
            { user.firstname }&nbsp;{ user.lastname }
            <Avatar icon={ <FontIcon className='material-icons'>person</FontIcon> } />
          </div> }
          title={ title } />
        <div className='wrapper'>
          <Paper className='left-menu'>
            <List>
              <ListItem primaryText='пункт меню 1' />
              <ListItem initiallyOpen nestedItems={[ <ListItem primaryText='пункт меню 2.1' />, <ListItem primaryText='пункт меню 2.2' /> ]} primaryText='пункт меню 2' />
              <ListItem primaryText='пункт меню 3' />
              <ListItem nestedItems={[ <ListItem primaryText='пункт меню 4.1' /> ]} primaryText='пункт меню 4' />
            </List>
          </Paper>
          <Paper className='content'>Content</Paper>
        </div>
        { showContacts && <ContactsForm contactsSave={ this.contactsSave } close={ this.toggleContacts } user={ user } /> }
      </div>);
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(App);
