import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Details from '../details';
import List from '../list';
import './app.scss';

export default class App extends Component {
    state = {
        currentPerson: 1
    }

    onPersonSelected = (id) => {
        this.setState({
            currentPerson: id
        })
    }

    render() {
        const { currentPerson } = this.state;

        return (
            <div>
                <Header />
                <div className="container">
                    <RandomPlanet />
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <List onItemClick={this.onPersonSelected}/>
                        </div>
                        <div className="col-12 col-md-8">
                            <Details currentPerson={currentPerson}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}
