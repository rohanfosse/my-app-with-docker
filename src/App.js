import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import config from './config';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ]);

  useEffect(() => {
    // Exemple de connexion à MongoDB dans un backend Node.js
    // fetch('/api/todos')
    //   .then(res => res.json())
    //   .then(data => setTodos(data))
    //   .catch(err => console.error('Error fetching todos:', err));
  }, []);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="App">
      <Header />
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
