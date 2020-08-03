import React from 'react';
import './TodoFilter.css';

const TodoFilter = ({ todos }) => {

    return (
        <div className="btn-group todo-filter">
            <button type="button" className="btn btn-secondary">All</button>
            <button type="button" className="btn btn-outline-secondary">Active</button>
            <button type="button" className="btn btn-outline-secondary">Done</button>
        </div>
    )
}

export default TodoFilter;