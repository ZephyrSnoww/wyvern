import { Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import Error404 from './components/error404/Error404';

import './AppContainer.css';
import LoginPage from './components/login/LoginPage';
import React from 'react';

class AppContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      token: undefined,
      sessionID: undefined
    };
  }

  changeState (key, value) {
    this.setState({
      [key]: value
    });
  }

  render () {
    return (
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginPage changeState={this.changeState} sessionID={this.state.sessionID} />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </div>
    );
  }
}

export default AppContainer;
