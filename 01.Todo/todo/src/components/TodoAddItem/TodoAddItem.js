import React, { Component } from 'react';
import './TodoAddItem.scss';

export default class TodoAddItem extends Component {
    state = {
        label: ''
    }

    onChange = (e) => {
        this.setState({ label: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label.length < 1) return;

        this.props.onAdd(this.state.label);
        this.setState({ label: '' });
    }

    render() {
        return (
            <form
                className="todo-list-add d-flex align-items-center mt-3"
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
