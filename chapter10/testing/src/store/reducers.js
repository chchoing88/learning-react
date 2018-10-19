import C from '../constants';

export const color = (state = {}, action = { type: null }) => {
  const { id, title, color, timestamp, type } = action;
  switch (type) {
    case C.ADD_COLOR:
      return {
        id,
        title,
        color,
        timestamp,
        rating: 0,
      }
    default:
      return state
  }
}