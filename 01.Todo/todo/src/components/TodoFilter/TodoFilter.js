import React, { Component } from 'react';
import './TodoFilter.scss';

export default class TodoFilter extends Component {
    render() {
        return (
            <div className="btn-group todo-filter">
                <button type="button" className="btn btn-secondary">All</button>
                <button type="button" className="btn btn-outline-secondary">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}
