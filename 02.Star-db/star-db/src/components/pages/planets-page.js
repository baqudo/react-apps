import React from 'react';
import { PlanetsList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PlanetsPage = ({ history }) => {
  return (
    <PlanetsList
      onItemClick={(id) => history.push(id)}
    />
  )
}

export default withRouter(PlanetsPage);