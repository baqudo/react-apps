import React, { Component } from 'react';
import Row from '../row';
import {
  PeopleList,
  PeopleDetails,
} from '../sw-components';

export default class PeoplePage extends Component {
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
        left={<PeopleList onItemClick={id => this.onItemSelect(id)} />}
        right={<PeopleDetails id={selectedItem} />}
      />
    )
  }
}