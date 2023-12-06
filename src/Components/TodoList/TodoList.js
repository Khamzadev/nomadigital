import React from 'react';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <ol>
        {
          todos.map(el => (
            <li style={{ textDecoration: el.status ? 'line-through' : 'none' }}>
              {el.title}
              <button onClick={() => setTodos(todos => todos.map(item => item === el ? { ...item, status: !item.status } : item))}>
                done
              </button>
            </li>
          ))
        }
      </ol>
    </div>
  );
};

export default TodoList;
