import { INSERTTODO } from '../actions/Todo/TodoActionTypes'

const initialState = {
  todos: [
    { id: 1, name: 'coding' }
  ]
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case INSERTTODO:
      console.log(action)
      return {
        todos: [action.obj, ...state.todos]
      }
    default:
      return state
  }
}