import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Details, { Record } from '../details';
import List from '../list';
import { API, matchId } from '../../services';
import './app.scss';
import Row from '../row.js';
import PeoplePage from '../people-page';

const APIService = new API();

export default class App extends Component {

    state = {
        currentPerson: null,
        currentType: null
    }

    onSelection = (id, type) => {
        this.setState({
            currentPerson: id,
            currentType: type
        })
    }

    render() {
        const { currentPerson, currentType } = this.state;

        const personDetails = (
            <Details 
                id={11}
                type="people"
                getData={APIService.getPerson}
            >
                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>

            </Details>

        )
        const starshipDetails = (
            <Details 
                id={11}
                type="starships"
                getData={APIService.getStarship}
            />
        )

        return (
            <div>
                <Header />
                <div className="container">
                    
                    <Row left={personDetails} right={starshipDetails} />

                </div>
            </div>
        )
    } 
}
