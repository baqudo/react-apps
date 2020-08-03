import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {

    const elements = todos.map(item => {
        const { id, ...rest } = item;
    
        return (
            <li key={id}>
                <TodoListItem { ...rest } />
            </li>
        )
    });

    return (
        <ul>
            { elements }
        </ul>
    )
}

export default TodoList;