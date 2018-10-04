import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
  backgroundColor: 'black',
  color: 'red'
}
export const AboutMenu = ({ match }) =>
  <ul>
    <li>
      <NavLink to="/about" style={match.isExact && selectedStyle}>회사</NavLink>
      <NavLink to="/about/service" activeStyle={selectedStyle}>서비스</NavLink>
    </li>
  </ul>