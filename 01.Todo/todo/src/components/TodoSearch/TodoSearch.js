import React, { Component } from 'react';
import './TodoSearch.scss';

export default class TodoSearch extends Component {
    state = {
        search: ''
    }

    onChange = (e) => {
        this.setState({ search: e.target.value });
        this.props.onSearch(e.target.value);
    }

    render() {
        return (
            <div className="todo-search">
                <input
                    className="form-control"
                    placeholder="search"
                    value={this.state.search}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
