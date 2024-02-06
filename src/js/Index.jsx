// import React from 'react';
// import PropTypes from 'prop-types';
import Routes from './components/Routes';

import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '../css/index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
);
