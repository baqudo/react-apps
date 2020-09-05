import React, { Component } from 'react';
import { API, matchId } from '../../services';
import Spinner from '../spinner';

export default class List extends Component {
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
        const people = data.results.map(person => {
            return {
                ...person,
                id: matchId(person.url)
            }
        });

        this.setState({
            loading: false,
            people
        })
    }


    render() {
        const { people, loading } = this.state;
        if (loading) return (<Spinner />);

        return (
            <ul className="list-group list-group-flush rounded">
                { people.map((person) => {
                    return (
                        <li className="person-item list-group-item d-flex justify-content-between"
                            key={person.id}
                            onClick={() => this.props.onItemClick(person.id)}
                        >
                            <span className="label">{ person.name }</span>
                        </li>
                    )
                }) }
            </ul>
        )
    }
}

// const ListView = ({ people }) => {
//     return (
//         <React.Fragment>
//             { people.map((person) => {
//                 return (
//                     <li className="list-group-item d-flex justify-content-between"
//                         key={person.id}
//                         onClick={this.props.onItemClick(person.id)}
//                     >
//                         <span className="label">{ person.name }</span>
//                     </li>
//                 )
//             }) }
//         </React.Fragment>
//     )
// }