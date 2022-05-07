import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './01.修改store中的数据'
// import App from './02.提取action代码作为函数'
// import App from './03.bindActionCreators的使用'
import App from './04.拆分合并reducer'

// 1.引入store
import store from './store';

// 2.引入Provider组件
import { Provider } from 'react-redux';

// 3.使用Provider组件将react的根组件包裹，将store以props的形式传递下去

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

