import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {

  const TODO_DATA = [
    { label: "Drink Tea", important: false, id: 1 },
    { label: "Drink Coffee", important: true, id: 2 },
    { label: "Have a Lunch", important: false, id: 3 },
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={TODO_DATA}/>
    </div>
  )
} 

ReactDOM.render(<App/>, document.getElementById('root'));