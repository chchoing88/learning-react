import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404
} from './pages'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Redirect from="/service" to="/about/service" />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route component={Whoops404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
