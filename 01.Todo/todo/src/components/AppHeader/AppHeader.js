import React from 'react';
import './AppHeader.scss';

const AppHeader = ({ todo, done }) => {
    return (
        <div className="app-header d-flex pt-3">
            <h1>My Todo List</h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
    )
}

export default AppHeader;