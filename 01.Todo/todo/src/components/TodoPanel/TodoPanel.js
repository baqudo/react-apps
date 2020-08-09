import React, { Component } from 'react';
import TodoFilter from '../TodoFilter';
import './TodoPanel.scss';

export default class TodoPanel extends Component {
    state = {
        search: ''
    }

    onChange = (e) => {
        this.setState({ search: e.target.value });
        this.props.onSearch(e.target.value);
    }

    render() {
        const { filter, filters, onFilterUpdate } = this.props;

        return (
            <div className="search-panel py-3">
                <div className="row justify-content-between">
                    <div className="col">
                        <input
                            className="form-control"
                            placeholder="search"
                            value={this.state.search}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col">
                        <TodoFilter 
                            filter={filter}
                            filters={filters}
                            onFilterUpdate={ val => onFilterUpdate(val) }
                        />
                    </div>
                </div>
            </div>
        )
    }
}
