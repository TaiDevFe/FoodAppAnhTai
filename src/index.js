import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './assets/pages/users/homePage';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './route';
import './styles/pages/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustom></RouterCustom>
  </BrowserRouter>
);
