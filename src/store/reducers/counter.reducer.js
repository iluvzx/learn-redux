import { INCREMENT, DECREMENT, INCREMENT_5 } from "../actions/counter.action.types"

// 创建初始状态
const initialState = {
  count: 0
}

// 创建一个函数，返回状态（数据）
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    case INCREMENT_5:
      return {
        count: state.count + action.payload
      }
    default:
      return state
  }
}