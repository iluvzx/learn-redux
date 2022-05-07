import { connect } from "react-redux";

function App(props) {
  return (
    <>
      <h2>当前计数:{props.count}</h2>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </>
  )
}

// 代码优化：自定义一个回调，用props到组件
const mapStateToProps = state => {
  return {
    count: state.count
  }
}


// 代码优化：提取action代码作为函数
// connect第二个回调可以接收dispatch这个函数
// 所以我们自定义一个回调 mapDispatchToProps
// 见名知意：将dispatch中的对象映射到组件的props中
// 此时的props: count、increment()、decrement()
const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch({ type: 'increment' })
    },
    decrement() {
      dispatch({ type: 'decrement' })
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)

// connect函数返回的对象中有一个dispatch函数，这个函数的参数是一个对象
// !!这个对象保存了指令type，type的key为指令的名称，这个名称应该和reducer中的指令名称相匹配!!
// dispatch传递的对象会派发到reducer函数作为一个形参接收