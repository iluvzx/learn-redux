import { connect } from "react-redux";

function App(props) {
  return (
    <>
      <h2>当前计数:{props.count}</h2>
      <button onClick={() => props.dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => props.dispatch({ type: 'decrement' })}>-</button>
    </>
  )
}

// 代码优化：自定义一个回调，用props到组件
const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App)

// connect函数返回的对象中有一个dispatch函数，这个函数的参数是一个对象
// !!这个对象保存了指令type，type的key为指令的名称，这个名称应该和reducer中的指令名称相匹配!!
// dispatch传递的对象会派发到reducer函数作为一个形参接收