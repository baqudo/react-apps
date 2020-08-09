import React, { Component } from 'react';
import './TodoListAdd.scss';

export default class TodoListAdd extends Component {

    render() {
        const { onAdd } = this.props;

        let classNames = "todo-list-add d-flex align-items-center mt-3";

        return (
            <div
                className={classNames}
            >
                <div className="todo-list-add__field">
                    <input className="todo-list-add__input form-control" />
                </div>
                
                <div className="todo-list-add__buttons ml-2">

                    <button type="button" className="btn btn-outline-primary"
                        onClick={ () => onAdd('new ToDo') }
                    >
                        Add item
                    </button>
                </div>
            </div>
        )
    }
}
