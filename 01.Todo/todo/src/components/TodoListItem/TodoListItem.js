import React, { Component } from 'react';
import './TodoListItem.scss';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
           return {
               done: !done
           }
        })
    }
    onImportantClick = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }


    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;
        
        let classNames = "todo-list-item d-flex align-items-center";
        if (done) classNames += ' is-done';
        if (important) classNames += ' is-important'

        return (
            <span
                className={classNames}
            >
                <span className="todo-list-item__label"
                    onClick={ this.onLabelClick }
                >{ label }</span>
                
                <div className="todo-list-item__buttons ml-auto">
                    <button type="button" className="btn btn-outline-danger btn-sm mr-2"
                        onClick={ onDeleted }
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                    <button type="button" className="btn btn-outline-success btn-sm"
                        onClick={ this.onImportantClick }
                    >
                        <i className="fa fa-exclamation" />
                    </button>
                </div>
            </span>
        )
    }
}
