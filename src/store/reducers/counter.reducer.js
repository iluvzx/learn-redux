// 创建初始状态
const initialState = {
  count: 0
}

// 创建一个函数，返回状态（数据）
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}