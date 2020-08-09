import React, { Component } from 'react';
import './TodoFilter.scss';

export default class TodoFilter extends Component {
    
    render() {
        const { filter, filters, onFilterUpdate } = this.props;

        const items = filters.map(item => {
            const className = item === filter
                ? "btn btn-secondary"
                : "btn btn-outline-secondary"

            return (
                <button
                    type="button"
                    className={className}
                    onClick={ () => onFilterUpdate(item) }
                    key={item}
                >{ item }</button>
            )
        })

        return (
            <div className="btn-group todo-filter">
                { items }
            </div>
        )
    }
}
