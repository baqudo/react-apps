import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import './app.scss';

const App = () => {
    const TODO_DATA = [
      { label: "Drink Tea", important: false, id: 1 },
      { label: "Drink Coffee", important: true, id: 2 },
      { label: "Have a Lunch", important: false, id: 3 },
    ]
  
    return (
      <div className="app container">
        <AppHeader />
        <SearchPanel />
        <TodoList todos={TODO_DATA}/>
      </div>
    )
}

export default App;