import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById('root')
);

window.addEventListener('load', () => {
  document.body.style.animation = 'fade-in 2s ease-out 1 forwards';
});
