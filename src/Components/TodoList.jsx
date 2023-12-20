import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const RemoveTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const completeTodos = id => {
    let updateTodos = todos.map(todo => {if(todo.id === id){
      todo.isComplete = !todo.isComplete
    }
    return todo
  })
  setTodos(updateTodos)
  }

  return (
    <div>
        <h1>What's the plan for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodos={completeTodos} RemoveTodo={RemoveTodo}  updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList