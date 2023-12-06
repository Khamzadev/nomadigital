import React, { useState } from 'react';







const AddTodo = ({ todos, setTodos }) => {

  const [value, setValue] = useState('')

  const saveTodo = () => {
    setTodos([
      {
        id: Math.random(),
        title: value,
        status: false
      },
      ...todos
    ])
    setValue('')
  }

  return (
    <div>
      <input placeholder='Введите задачу' value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={saveTodo}>Add</button>
    </div>
  );
};

export default AddTodo;