import React, { Component } from 'react';
import { API } from '../../services';
import Spinner from '../spinner';

export default class Details extends Component {
    constructor() {
        super();
        this.init()
    };

    state = {
        loading: true,
        people: []
    }

    async init() {
        const data = await API.get('people');
        console.log({ data });
        this.setState({
            loading: false,
            people: data.results
        })
    }


    render() {
        const { people, loading } = this.state;
        return (
            <ul className="list-group list-group-flush rounded">
                { loading ? <Spinner /> : <ListView people={people}/>}
            </ul>
        )
    }
}

const ListView = ({ people }) => {
    return (
        <React.Fragment>
            { people.map((person, idx) => {
                return (
                    <li className="list-group-item d-flex justify-content-between" key={idx}>
                        <span className="label">{ person.name }</span>
                    </li>
                )
            }) }
        </React.Fragment>
    )
}