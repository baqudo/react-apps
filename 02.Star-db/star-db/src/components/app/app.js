import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Details from '../details';
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

        // const peopleList = (
        //     <List
        //         onItemClick={id => this.onSelection(id, 'people')}
        //         getData={APIService.getAllPeople}
        //     >
        //         { (i) => (<span>{i.name} ({i.gender}, {i.birthYear})</span>) }
        //     </List>
        // )
        // const details = (
        //     <Details
        //         id={currentPerson}
        //         type={currentType}
        //     />
        // )

        return (
            <div>
                <Header />
                <div className="container">
                    <RandomPlanet />

                    <PeoplePage />

                    {/* <div className="row">
                        <div className="col-12 col-md-4">
                            <List
                                onItemClick={id => this.onSelection(id, 'planets')}
                                getData={APIService.getAllPlanets}
                                renderItem={({name, diameter}) => (<span>{name} (Diameter: {diameter}km)</span>)}
                            />
                            <List
                                onItemClick={id => this.onSelection(id, 'starships')}
                                getData={APIService.getAllStarships}
                                renderItem={({name, model}) => (<span>{name} (Model: {model})</span>)}
                            /> 
                        </div>
                        <div className="col-12 col-md-8">
                            
                        </div>
                    </div> */}
                </div>
            </div>
        )
    } 
}
