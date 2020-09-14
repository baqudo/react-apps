import React, { Component } from 'react';
import Header from '../header';
import './app.scss';
import Row from '../row.js';

import {
  PeopleList,
  PlanetsList,
  StarshipsList,
  PeopleDetails,
  PlanetsDetails,
  StarshipsDetails
} from '../sw-components';

export default class App extends Component {

    state = {
        currentPerson: 1,
        currentPlanet: 2,
        currentStarship: 4
    }

    onClick = (id, type) => {
        this.setState({
            [type]: id,
        })
    }

    render() {
        const { currentPerson, currentPlanet, currentStarship } = this.state;

        return (
            <div>
                <Header />
                <div className="container">

                    <Row
                        left={
                            <PeopleList onItemClick={id => this.onClick(id, 'currentPerson')}>
                                {({name, gender, birthYear}) => (<span>{name} ({gender}, {birthYear})</span>)}
                            </PeopleList>
                        }
                        right={
                            <PeopleDetails id={currentPerson} />
                        }
                    />

                    <Row
                        left={
                            <PlanetsList onItemClick={id => this.onClick(id, 'currentPlanet')}>
                                { ({ name }) => <span>{name}</span>}
                            </PlanetsList>
                        }
                        right={
                            <PlanetsDetails id={currentPlanet} />
                        }
                    />
                    

                    <Row
                        left={
                            <StarshipsList onItemClick={id => this.onClick(id, 'currentStarship')}>
                                { ({ name }) => <span>{name}</span>}
                            </StarshipsList>
                        }
                        right={
                            <StarshipsDetails id={currentStarship} />
                        }
                    />
                    

                </div>
            </div>
        )
    } 
}
