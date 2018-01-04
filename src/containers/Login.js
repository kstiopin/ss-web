import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, FlatButton } from 'material-ui';

import Login from './Login';

class App extends Component {
  render () {
    return (
      <Dialog actions={ [<FlatButton label='Вход' primary onClick={ this.handleAuth } />] } modal open title='Авторизация'>
        Форма входа
      </Dialog>);
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
