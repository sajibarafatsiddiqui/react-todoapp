import TodoItem from 'components/TodoItem';
import PropTypes from 'prop-types';

const TodoList = ({
  todos, handleChange, delTodo, editTodo,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        editTodo={editTodo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
export default TodoList;
