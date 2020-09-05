import React, { Component } from 'react';
import { API, toDefaultText } from '../../services';
import Spinner from '../spinner';

import './details.scss';

export default class Details extends Component {
    constructor() {
        super();
        this.init(1)
    };

    state = {
        type: 'people',
        loading: true,
        person: {}
    }

    async init(reqId) {
        const {
            id,
            birthYear,
            eyeColor,
            gender,
            hairColor,
            height,
            mass,
            name,
            skinColor
        } = await API.get(`${this.state.type}/${reqId}`);

        this.setState({
            loading: false,
            person: {
                id,
                birthYear,
                eyeColor,
                gender,
                hairColor,
                height,
                mass,
                name,
                skinColor
            }
        })
    }


    render() {
        const { person, loading } = this.state;

        return (
            <div className="details card mb-3">
                { loading ? <Spinner /> : <DetailsView person={person} /> }
            </div>
        )
    }
}


const DetailsView = ({ person }) => {
    const { name, id, ...rest } = person;
    const keys = Object.keys(rest);
    return (
        <React.Fragment>
            <h3 className="card-header">{ name }</h3>
            <div className="card-body d-flex">
                <img className="details__img rounded mr-2" src={`${process.env.REACT_APP_ASSETS_URL}/img/characters/${id}.jpg`} alt={name} />

                <ul className="details__list list-group list-group-flush rounded">
                    { keys.map(key => {
                        return (
                            <li className="list-group-item d-flex justify-content-between" key={key}>
                                <span className="label">{toDefaultText(key)}:</span>
                                <span className="value">{person[key]}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}