// !!引入connect!!
import { connect } from "react-redux"

function Counter(props) {
  return (
    <>
      <h2>current count:{props.count}</h2>
      <button>+1</button>
      <button>-1</button>
    </>
  )
}

export default connect(state => ({
  count: state.count
}))(Counter)

// 1.在入口文件中引入store
// 2.从react-redux中引入Provider组件
// 3.使用Provider组件将react的根组件包裹，使用props的形式将store传递下去
// 4.在组件文件中引入connect函数
//   **参数为回调函数，回调函数可以接收一个state参数，这个state是Provider传递下来的store中的数据**
//   **回调函数的返回值是一个对象，这个对象会映射到组件的props中**
//   **connect返回一个函数，需要调用，参数为组件名称**
