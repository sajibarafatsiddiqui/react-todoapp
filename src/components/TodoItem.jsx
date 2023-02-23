import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from 'styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, editTodo,
}) => {
  const [editing, setEditing] = useState(false);
  const viewmode = {};
  const editmode = {};
  if (editing) {
    viewmode.display = 'none';
  } else {
    editmode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewmode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => {
            handleChange(itemProp.id);
          }}
        />
        <button type="submit" onClick={() => setEditing(true)}>Edit</button>
        <button type="submit" onClick={() => delTodo(itemProp.id)}>
          delete
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editmode}
        onChange={(e) => editTodo(itemProp.id, e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
