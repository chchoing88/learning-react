import C from './constants'
import { v4 } from 'uuid'

export const addColor = (title, color) => ({
  type: C.ADD_COLORS,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString()
})

export const removeColor = id => ({
  type: C.REMOVE_COLORS,
  id
})

export const rateColor = (id, rating) => ({
  type: C.RATE_COLORS,
  rating,
  id
})

export const sortColors = sortBy =>
  ({
    type: "SORT_COLORS",
    sortBy
  })