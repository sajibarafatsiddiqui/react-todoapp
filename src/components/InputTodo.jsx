import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => { setTitle(e.target.value); setMessage(''); };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    } else {
      setMessage('Please add item');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = { addTodo: PropTypes.func.isRequired };
export default InputTodo;
