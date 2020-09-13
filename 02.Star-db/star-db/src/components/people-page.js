import React, { Component } from 'react';
import Details from './details';
import List from './list';
import { API } from '../services';
import Row from './row.js';
import ErrorBoundry from './error-boundry';

const APIService = new API();



export default class PeoplePage extends Component {

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
            <ErrorBoundry>
                <Details
                    id={currentPerson}
                    type={currentType}
                    getData={APIService.getPerson}
                />
            </ErrorBoundry>
        )

        return (
            <Row left={peopleList} right={details}/>
        )
    } 
}
