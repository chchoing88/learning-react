import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
  backgroundColor: 'black',
  color: 'red'
}

export const MainMenu = () =>
  <nav className="main_menu">
    <NavLink to="/about" activeStyle={selectedStyle}>회사소개</NavLink>
    <NavLink to="/events" activeStyle={selectedStyle}>이벤트</NavLink>
    <NavLink to="/products" activeStyle={selectedStyle}>제품</NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle}>고객지원</NavLink>
  </nav>


