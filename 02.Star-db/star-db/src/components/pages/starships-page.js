import React, { Component } from 'react';
import Row from '../row';
import {
  StarshipsList,
  StarshipsDetails,
} from '../sw-components';

export default class StarshipsPage extends Component {
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
        left={<StarshipsList onItemClick={id => this.onItemSelect(id)} />}
        right={<StarshipsDetails id={selectedItem} />}
      />
    )
  }
}