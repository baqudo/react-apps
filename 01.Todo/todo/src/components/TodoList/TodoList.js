import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map(item => {
        const { id, ...rest } = item;
    
        return (
            <li key={id} className="list-group-item p-2 px-3">
                <TodoListItem { ...rest }
                    onDeleted={ () => onDeleted(id) }
                />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    )
}

export default TodoList;