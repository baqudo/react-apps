import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Details from '../details';
import List from '../list';
import { API } from '../../services';
import Row from '../row.js';

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

        const peopleList = (
            <List
                onItemClick={id => this.onSelection(id, 'people')}
                getData={APIService.getAllPeople}
                renderItem={({name, gender, birthYear}) => (<span>{name} ({gender}, {birthYear})</span>)}
            />
        )
        const details = (
            <Details
                id={currentPerson}
                type={currentType}
            />
        )

        return (
            <div>
                <Header />
                <div className="container">
                    <RandomPlanet />
                    <Row left={peopleList} right={details}/>
                </div>
            </div>
        )
    } 
}
