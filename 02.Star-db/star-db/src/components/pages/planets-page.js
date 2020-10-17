import React from 'react';
import { PlanetsList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PlanetsPage = ({ history }) => {
  return (
    <PlanetsList
      onItemClick={(id) => {
        history.push(`/planets/${id}`);
      }}
    />
  )
}

export default withRouter(PlanetsPage);