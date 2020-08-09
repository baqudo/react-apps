import React, { Component } from 'react';
import './TodoListAdd.scss';

export default class TodoListAdd extends Component {
    state = {
        label: ''
    }

    onChange = (e) => {
        this.setState({ label: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({ label: '' });
    }

    render() {
        const { onAdd } = this.props;

        let classNames = "todo-list-add d-flex align-items-center mt-3";

        return (
            <form
                className={classNames}
                onSubmit={ this.onSubmit }
            >
                <div className="todo-list-add__field">
                    <input
                        className="todo-list-add__input form-control"
                        value={this.state.label}
                        onChange={this.onChange}
                        placeholder="What needs to be done?"
                    />
                </div>
                
                <div className="todo-list-add__buttons ml-2">

                    <button type="submit" className="btn btn-outline-primary">
                        Add item
                    </button>
                </div>
            </form>
        )
    }
}
