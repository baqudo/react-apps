import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <span
            className="todo-list-item d-flex align-items-center"
            style={style}
        >
            <span className="todo-list-item__label">{ label }</span>
            
            <div className="todo-list-item__buttons ml-auto">
                <button type="button" className="btn btn-outline-danger btn-sm mr-2">
                    <i className="fa fa-trash-o" />
                </button>
                <button type="button" className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation" />
                </button>
            </div>
        </span>
    )
}

export default TodoListItem;