import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Menu, NewColor, Colors } from '../containers'


class App extends Component {


  getChildContext() {

    return {
      store: this.props.store
    }
  }

  componentWillMount() {
    this.unsubscribe = this.props.store.subscribe(
      () => this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {

    // const { colors, sort } = this.props.store.getState();
    // const sortedColors = [...colors].sort(sortFunction(sort))
    return (
      <div className="app">
        <Menu />
        <NewColor />
        <Colors />
      </div>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App