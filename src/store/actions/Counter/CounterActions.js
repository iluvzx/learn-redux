// 导入actions
import { INCREMENT, DECREMENT, INCREMENT_5 } from "./CounterActionsTypes"

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const increment_5 = payload => ({ type: INCREMENT_5, payload })