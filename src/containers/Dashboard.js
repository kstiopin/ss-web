import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppBar, IconButton, List, ListItem, Paper, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
// Actions
import { getUserDetailsAction, userDetailsUpdateAction } from '../actions';
// Components
import ContactsForm from '../components/ContactsForm';

class Dashboard extends Component {
  state = { showContacts: false }

  componentDidMount() {
    const { getUserDetailsAction, user } = this.props;
    if (user.hasOwnProperty('id') && (user.id > 0)) {
      getUserDetailsAction(user.id);
    }
  }

  componentDidUpdate(prevProps) {
    const { getUserDetailsAction, user } = this.props;
    if ((!prevProps.user.hasOwnProperty('id') && user.hasOwnProperty('id')) || (prevProps.user.id !== user.id)) {
      getUserDetailsAction(user.id);
    } else if (user.hasOwnProperty('id') && user.hasOwnProperty('firstname') && (!prevProps.user || !prevProps.user.hasOwnProperty('firstname'))) {
      // this.checkUserDetails(user); // TODO: idea behind this was to show user form if some of user data is absent
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
    const { userDetailsUpdateAction } = this.props;
    userDetailsUpdateAction(details);
    this.toggleContacts();
  }

  render() {
    const { user } = this.props;
    const { showContacts } = this.state;
    const { firstname, lastname, type } = user;
    const title = 'SmartSales';
    const menuItems = [
      { access: [1, 2, 3], title: 'личный профиль' },
      { access: [1, 2], title: 'отдел продаж' },
      { access: [1, 2], title: 'мои задачи' },
      { access: [1, 2], title: 'события' },
      { access: [1, 2, 3], title: 'база знаний' },
      { access: [1, 2], title: 'структура компании' },
      { access: [1, 2], title: 'настройки системы' },
      { access: [1, 2, 3], title: 'файлы' },
      { access: [1, 2, 3], title: 'документы' },
      { access: [3], title: 'бизнес процессы' },
      { access: [3], title: 'скрипты' },
      { access: [3], title: 'FAQ' },
    ].filter(menuItem => menuItem.access.indexOf(type * 1) > -1);
    console.log('Dashboard', 'RENDER', user, menuItems, this.state);
    // TODO: 'user-info' should be placed to the right of the AppBar

    return (
      <Fragment>
        <AppBar position='static'>
          <Toolbar>
            <Typography color='inherit' noWrap variant='h6'>{ title }</Typography>
            <div className='user-info'>
              { firstname }&nbsp;{ lastname }
              <IconButton aria-haspopup='false' color='inherit'>
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div className='wrapper'>
          <Paper className='left-menu'>
            <List>
              { menuItems.map((menuItem, index) => <ListItem button key={ index }>{ menuItem.title }</ListItem>) }
              { /* (type === '1') && <ListItem primaryText='настройки компании' />
              <ListItem primaryText='пункт меню 1' />
              <ListItem primaryText='пункт меню 1' />
              <ListItem initiallyOpen nestedItems={[ <ListItem primaryText='пункт меню 2.1' />, <ListItem primaryText='пункт меню 2.2' /> ]} primaryText='пункт меню 2' />
              <ListItem primaryText='пункт меню 3' />
              <ListItem nestedItems={[ <ListItem primaryText='пункт меню 4.1' /> ]} primaryText='пункт меню 4' /> */ }
            </List>
          </Paper>
          <Paper className='content'>Content</Paper>
        </div>
        { showContacts && <ContactsForm contactsSave={ this.contactsSave } close={ this.toggleContacts } user={ user } /> }
      </Fragment>);
  }
}

Dashboard.propTypes = {
  getUserDetailsAction: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  userDetailsUpdateAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({ getUserDetailsAction, userDetailsUpdateAction }, dispatch);
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
