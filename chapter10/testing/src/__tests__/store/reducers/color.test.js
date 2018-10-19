import C from '../../../constants';
import { color } from '../../../store/reducers';
// 어떤 객체를 동결 시킨뒤 그 객체를 변경하려 시도하는 경우 오류가 발생한다. 
import deepFreeze from 'deep-freeze';

describe("color 리듀서", () => {
  it("ADD_COLOR 성공", () => {
    const state = {};
    const action = {
      type: C.ADD_COLOR,
      id: 0,
      title: 'test teal',
      color: '#fff',
      timestamp: new Date().toString()
    }
    deepFreeze(state);
    deepFreeze(action);
    const results = color(state, action);

    expect(results).toEqual({
      id: 0,
      title: 'test teal',
      color: '#fff',
      timestamp: action.timestamp,
      rating: 0
    })
  })

  it("RATE_COLOR 성공", () => {

  })
})