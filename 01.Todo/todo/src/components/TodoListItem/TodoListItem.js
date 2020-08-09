import React, { Component } from 'react';
import './TodoListItem.scss';

export default class TodoListItem extends Component {
    render() {
        const { 
            label,
            done,
            important,
            onDeleted,
            onToggleDone,
            onToggleImportant
        } = this.props;

        let classNames = "todo-list-item d-flex align-items-center";
        if (done) classNames += ' is-done';
        if (important) classNames += ' is-important'

        return (
            <span
                className={classNames}
            >
                <span className="todo-list-item__label"
                    onClick={ onToggleDone }
                >{ label }</span>
                
                <div className="todo-list-item__buttons ml-auto">
                    <button type="button" className="btn btn-outline-danger btn-sm mr-2"
                        onClick={ onDeleted }
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                    <button type="button" className="btn btn-outline-success btn-sm"
                        onClick={ onToggleImportant }
                    >
                        <i className="fa fa-exclamation" />
                    </button>
                </div>
            </span>
        )
    }
}
