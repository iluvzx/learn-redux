import { connect } from "react-redux";

// !!1.引入bindActionCreators函数
import { bindActionCreators } from 'redux'

// !!2.导入action
// import * as counterActions from './store/actions/CounterActions'
import * as TodoActions from './store/actions/Todo/TodoAction'


function TodoList(props) {
  return (
    <>
      <h2>TodoList</h2>
      <button onClick={() => props.insertTodo({id: 2, name: 'eating'})}>add todo</button>
      <ul>
        {
          props.todos.map(todo => <li key={todo.id}>{todo.name}</li>)
        }
      </ul>
    </>
  )
}

// 代码优化：自定义一个回调，用props到组件
const mapStateToProps = state => {
  return {
    todos: state.TodoReducer.todos
  }
}

// 函数调用dispatch代码重复
// bindActionCreators()接收两个参数，第一个是一个对象，第二个是dispatch
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(TodoActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


// 将每个组件的reducer拆分成一个文件