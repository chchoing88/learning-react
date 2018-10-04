import React, { Component } from 'react';

import { MainMenu } from './mainMenu';

export const PageTemplate = ({ children }) =>
  <div className="page">
    <MainMenu />
    {children}
  </div>