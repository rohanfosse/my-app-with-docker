import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </p>
    </div>
  );
}

export default TodoItem;
