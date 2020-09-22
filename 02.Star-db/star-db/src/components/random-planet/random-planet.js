import React, { Component } from 'react';
import { API } from '../../services';
import Spinner from '../spinner';
import './random-planet.scss';

const APIService = new API();

export default class RandomPlanet extends Component {
    static defaultProps = {
        updateInterval: 10000
    }
    static propTypes = {
        updateInterval: (props, propName, componentName) => {
            const val = props[propName];
            if (typeof val === 'number' && !isNaN(val)) {
                return null;
            }

            return new TypeError(`${componentName}: ${propName} must be number`)
        }
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, this.props.updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    state = {
        loading: true,
        planet: {}
    }

    updatePlanet = async () => {
        const id = Math.floor(Math.random() * 20) + 2;
        const {
            name,
            population,
            rotationPeriod,
            orbitalPeriod,
            diameter
        } = await APIService.get(`planets/${id}/`);

        this.setState({
            planet: {
                id,
                name,
                population,
                rotationPeriod,
                orbitalPeriod,
                diameter
            },
            loading: false
        })
    }
    render() {
        const { planet, loading } = this.state;

        return (
            <div className="random-planet jumbotron my-3 p-3">
                {loading ? <Spinner /> : <PlanetView planet={planet}/>}
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, orbitalPeriod, diameter } = planet;
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-md-4 rounded random-planet__img">
                    <img className="rounded" src={`${process.env.REACT_APP_ASSETS_URL}/img/planets/${id}.jpg`} alt={name} />
                </div>
                <div className="col-12 col-md-8 random-planet__content">
                    <ul className="list-group list-group-flush rounded">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="label">Population:</span>
                            <span className="value">{population}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="label">Rotation Period:</span>
                            <span className="value">{rotationPeriod} days</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="label">Orbital Period:</span>
                            <span className="value">{orbitalPeriod} days</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="label">Diameter:</span>
                            <span className="value">{diameter} km</span>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}