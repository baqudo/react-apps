import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import './app.scss';

export default class App extends Component {
  state = {
    todos: [
      { label: "Drink Tea", important: false, id: 1 },
      { label: "Drink Coffee", important: true, id: 2 },
      { label: "Have a Lunch", important: false, id: 3 },
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(item => item.id !== id)
      }
    })
  }


  render() {
    const { todos } = this.state;

    return (
      <div className="app container">
        <AppHeader />
        <SearchPanel />
        <TodoList
          todos={todos}
          onDeleted={ this.deleteItem }
        />
      </div>
    )
  }
}