import { connect } from 'react-redux'
import { toggleTodo } from '../../../store/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos: any[], filter: any) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state: { todos: any[]; visibilityFilter: any }) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onTodoClick: (id: string | number) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList