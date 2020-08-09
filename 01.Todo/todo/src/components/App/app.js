import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import TodoListAdd from '../TodoListAdd';
import './app.scss';

export default class App extends Component {

  idCounter = 1;

  state = {
    todos: [
      this.createTodoItem("Drink Tea"),
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Have a Lunch"),
    ]
  }

  createTodoItem(label) {
    return {
      id: this.idCounter++,
      label,
      important: false,
      done: false
    }
  }

  onDeleteItem = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(item => item.id !== id)
      }
    })
  }

  onAddItem = (label) => {
    const newItem = this.createTodoItem(label);
    this.setState(({ todos }) => {
      return {
        todos: [
          ...todos,
          newItem
        ]
      }
    })
  }

  onToggleDone = (id) => {
    console.log('onToggleDone', id);

    this.setState(({ todos }) => {
      const idx = todos.findIndex(el => el.id === id);
      const arr = todos.slice();
      arr[idx].done = !arr[idx].done;

      return {
        todos: arr
      }
    })
  }
  onToggleImportant = (id) => {
    console.log('onToggleImportant', id);

    this.setState(({ todos }) => {
      const idx = todos.findIndex(el => el.id === id);
      const item = todos[idx];

      return {
        todos: [
          ...todos.slice(0, idx),
          {
            ...item,
            important: !item.important
          },
          ...todos.slice(idx + 1)
        ]
      }
    })
  }



  render() {
    const { todos } = this.state;
    const doneCount = todos.filter(item => item.done).length;
    const todoCount = todos.length - doneCount;

    return (
      <div className="app container">
        <AppHeader todo={todoCount} done={doneCount}/>
        <SearchPanel />
        <TodoList
          todos={todos}
          onDeleted={ this.onDeleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />

        <TodoListAdd 
          onAdd={ this.onAddItem }
        />
      </div>
    )
  }
}