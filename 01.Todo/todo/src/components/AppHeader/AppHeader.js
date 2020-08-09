import React from 'react';
import './AppHeader.scss';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className="app-header d-flex pt-3">
            <h1>My Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    )
}

export default AppHeader;