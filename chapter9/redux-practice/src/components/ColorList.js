import React from 'react';
import PropTypes from 'prop-types'
import Color from './Color'
import { rateColor, removeColor } from '../actions'
import { sortFunction } from '../lib/array-helpers'
// import '../../stylesheets/ColorList.scss'

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) => {

  // const { colors, sort } = store.getState();
  // const sortedColors = [...colors].sort(sortFunction(sort))

  return (
    <div className="color-list">
      {(colors.length === 0) ?
        <p>색이 없습니다. (색을 추가해 주세요)</p> :
        colors.map(color =>
          <Color key={color.id}
            {...color}
          onRate={(rating) => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)} 
          // onRate={rating =>
          //   store.dispatch(rateColor(color.id, rating))
          // }
          // onRemove={() =>
          //   store.dispatch(removeColor(color.id))
          // }
          />
        )
      }
    </div>
  )
}
ColorList.propTypes = {
  colors: PropTypes.array,
  // onRate: PropTypes.func,
  // onRemove: PropTypes.func
}

export default ColorList