import { connect } from "react-redux";

// !!1.引入bindActionCreators函数
import { bindActionCreators } from 'redux'
// !!2.导入actions
import * as counterActions from './store/actions/counter.action'


function App(props) {
  return (
    <>
      <h2>当前计数:{props.count}</h2>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={() => props.increment_5(5)}>+5</button>
    </>
  )
}

// 代码优化：自定义一个回调，用props到组件
const mapStateToProps = state => {
  return {
    count: state.count
  }
}

// 函数调用dispatch代码重复
// bindActionCreators()接收两个参数，第一个是一个对象，第二个是dispatch
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(counterActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
