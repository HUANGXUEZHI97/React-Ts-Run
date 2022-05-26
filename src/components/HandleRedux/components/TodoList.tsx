import { FC} from 'react'
import Todo from './Todo'



interface TodoListProps {
  todos: Array<{
    id: number,
    completed: boolean,
    text: string
  }>,
  onTodoClick(index:number):void
}

const TodoList: FC<TodoListProps>= ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
)

export default TodoList