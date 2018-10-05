import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import SortMenu from '../components/SortMenu';
import AddColorForm from '../components/AddColorForm'
import ColorList from '../components/ColorList'
import { addColor, sortColors, rateColor, removeColor } from '../actions'
import { sortFunction } from '../lib/array-helpers'

// import { Menu, NewColor, Colors } from '../containers'
export const NewColor = (props, { store }) =>
  <AddColorForm onNewColor={(title, color) =>
    store.dispatch(addColor(title, color))
  } />

NewColor.contextTypes = {
  store: PropTypes.object
}

export const Menu = (props, { store }) =>
  <SortMenu sort={store.getState().sort}
    onSelect={sortBy =>
      store.dispatch(sortColors(sortBy))
    }
  />

Menu.contextTypes = {
  store: PropTypes.object
}
// const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) => {

export const Colors = connect(
  state => ({
    colors: [...state.colors].sort(sortFunction(state.sort))
  }),
  dispatch => ({
    onRate(id, rating) {
      dispatch(rateColor(id, rating))
    },
    onRemove(id) {
      dispatch(removeColor(id))
    }
  })
)(ColorList)

// export const Colors = (props, {store}) => {
//     const {colors, sort} = store.getState();
//     const sortedColors = [...colors].sort(sortFunction(sort));
//     return (
//         <ColorList colors={sortedColors}
//             onRate={(id, rating) => 
//                 store.dispatch(rateColor(id, rating))
//             }
//             onRemove={(id) => 
//                 store.dispatch(removeColor(id))
//             }
//         />
//     )
// }


// Colors.contextTypes = {
//     store: PropTypes.object
// }