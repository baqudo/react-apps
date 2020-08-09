import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import TodoSearch from '../TodoSearch';
import TodoFilter from '../TodoFilter';
import TodoList from '../TodoList';
import TodoAddItem from '../TodoAddItem';
import './app.scss';

export default class App extends Component {

  idCounter = 1;

  state = {
    search: '',
    filter: 'all',
    filters: ['all', 'active', 'done'],
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

  toggleTodoProperty({ id, propName }) {
    console.log('toggleStateProperty', {id, propName});
    this.setState(({ todos }) => {
      const idx = todos.findIndex(el => el.id === id);
      const item = todos[idx];

      return {
        todos: [
          ...todos.slice(0, idx),
          {
            ...item,
            [propName]: !item[propName]
          },
          ...todos.slice(idx + 1)
        ]
      }
    })
  }

  onToggleDone = (id) => {
    this.toggleTodoProperty({ id, propName: 'done' });
  }
  onToggleImportant = (id) => {
    this.toggleTodoProperty({ id, propName: 'important' });
  }

  onSearch = (value) => {
    this.setState({ search: value })
  }
  onFilterUpdate = (name) => {
    this.setState({
      filter: name
    })
  }

  search(list, search) {
    if (search === '') return list;
    return list.filter(item => item.label.toLowerCase().includes(search.toLowerCase()));
  }

  filter(list, filter) {
    switch(filter) {
      case 'done':
        return list.filter(item => item.done)
      case 'active':
        return list.filter(item => !item.done)
      default:
        return list;
    }
  }

  render() {
    const { todos, search, filter } = this.state;
    const doneCount = todos.filter(item => item.done).length;
    const todoCount = todos.length - doneCount;
    
    const filteredTodos = this.filter(
      this.search(todos, search),
      filter
    );

    return (
      <div className="app container">
        <AppHeader todo={todoCount} done={doneCount}/>

        <div className="search-panel py-3">
          <div className="row justify-content-between">
              <div className="col">
                <TodoSearch
                  onSearch={this.onSearch}
                />
              </div>
              <div className="col">
                <TodoFilter 
                  filter={this.state.filter}
                  filters={this.state.filters}
                    onFilterUpdate={ this.onFilterUpdate }
                />
              </div>
          </div>
        </div>

        <TodoList
          todos={filteredTodos}
          onDeleted={ this.onDeleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />

        <TodoAddItem 
          onAdd={ this.onAddItem }
        />
      </div>
    )
  }
}