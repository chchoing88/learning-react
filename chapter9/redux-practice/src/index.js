import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import storeFactory from './store';

const store = storeFactory();

// const render = () =>
//   ReatDOM.render(
//     <App store={store} />,
//     document.getElementById('root')
//   )

// store.subscribe(render)
// render();

render(
  <App store={store} />,
  document.getElementById('root')
)
