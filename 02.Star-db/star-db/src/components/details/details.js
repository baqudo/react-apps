import React, { Component } from 'react';
import { API, toDefaultText } from '../../services';

export default class Details extends Component {
    constructor() {
        super();
        this.init(1)
    };

    state = {
        type: 'people',
        data: {}
    }

    async init(id) {
        const data = await API.get(`${this.state.type}/${id}/`);
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div className="card mb-3">
                <h3 className="card-header">Card header</h3>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    <ul className="list-group list-group-flush rounded">
                        {/* { keys.map(key => {
                            return (
                                <li className="list-group-item d-flex justify-content-between" key={key}>
                                    <span className="label">{toDefaultText(key)}</span>
                                    <span className="value">{planet[key]}</span>
                                </li>
                            )
                        }) } */}
                    </ul>
                </div>
            </div>
        )
    }
}
