import React, { Component } from 'react';
import { API, toDefaultText } from '../../services';
import Spinner from '../spinner';
import ErrorBtn from '../error-btn';

import './details.scss';

export default class Details extends Component {

    componentDidMount() {
        this.updatePerson(this.props.currentPerson)
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.currentPerson !== prevProps.currentPerson) {
            this.updatePerson(this.props.currentPerson)
        }
    }
    
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    state = {
        type: 'people',
        loading: true,
        hasError: false,
        person: {}
    }

    async updatePerson(reqId) {
        if (!reqId) return;

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
        const { person, loading, hasError } = this.state;
        const { currentPerson } = this.props;

        if(hasError) {
            return (
                <div className="details card mb-3 p-3 text-danger">Oops, Error! D:</div>
            )
        }

        if(!currentPerson) {
            return ( 
                <div className="details card mb-3 p-3">Please, choose a character</div>
            )
        }
    
        return (
            <div className="details card mb-3">
                { loading ? <Spinner /> : <DetailsView person={person} /> }

                <ErrorBtn />
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
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-md-5 details__img">
                        <img className="rounded" src={`${process.env.REACT_APP_ASSETS_URL}/img/characters/${id}.jpg`} alt={name} />
                    </div>

                    <div className="col-12 col-md-7">
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
                </div>
            </div>
        </React.Fragment>
    )
}