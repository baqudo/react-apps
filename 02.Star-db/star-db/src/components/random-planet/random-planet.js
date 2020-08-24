import React, { Component } from 'react';
import { API, toDefaultText } from '../../services';

import './random-planet.scss';

export default class RandomPlanet extends Component {
    constructor() {
        super();
        this.init()
    };

    state = {
        planet: {}
    }

    async init() {
        const id = Math.floor(Math.random() * 30) + 2;
        const data = await API.get(`planets/${id}/`);

        console.log({ data });
        this.setState({
            planet: data
        })
    }
    render() {
        const { planet } = this.state;
        const keys = Object.keys(planet);

        return (
            <div className="random-planet jumbotron my-3 p-3">
                <div className="row">
                    <div className="col-12 col-md-4 rounded random-planet__img">
                        <img className="rounded" src={`${process.env.REACT_APP_ASSETS_URL}/img/planets/${planet.id}.jpg`} alt={planet.name} />
                    </div>
                    <div className="col-12 col-md-8 random-planet__content">
                        <ul className="list-group list-group-flush rounded">
                            { keys.map(key => {
                                return (
                                    <li className="list-group-item d-flex justify-content-between" key={key}>
                                        <span className="label">{toDefaultText(key)}</span>
                                        <span className="value">{planet[key]}</span>
                                    </li>
                                )
                            }) }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}