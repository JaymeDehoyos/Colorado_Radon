// import React from 'react';
// import PropTypes from 'prop-types';

import {Routes as RoutesComponent, Route} from 'react-router-dom';

import Layout from './Layout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Specials from './pages/Specials';

const Routes = () => {
  return (
    <RoutesComponent>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="specials" element={<Specials/>}/>
        <Route path="*" element={<div>404 Cool guy not found</div>}/>
      </Route>
    </RoutesComponent>
  );
};


Routes.propTypes = {

};


export default Routes;
