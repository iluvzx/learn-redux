// 入口文件，用于创建store
import { createStore } from "redux";

// 引入reducer
// import counterReducer from "./reducers/counter.reducer";

import reducers from "./reducers";

// 创建store，store保存了reducer返回的数据
const store = createStore(reducers)


// 导出store
export default store