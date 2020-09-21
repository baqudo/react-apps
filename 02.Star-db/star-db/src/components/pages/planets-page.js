import React, { Component } from 'react';
import Row from '../row';
import {
  PlanetsList,
  PlanetsDetails,
} from '../sw-components';

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null
  }

  onItemSelect = (selectedItem) => {
    this.setState({ selectedItem })
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetsList onItemClick={id => this.onItemSelect(id)} />}
        right={<PlanetsDetails id={selectedItem} />}
      />
    )
  }
}