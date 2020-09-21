import React from 'react';
import Details, { Record } from '../details';
import { withApiService } from '../hoc-helpers';

const PlanetsDetails = (props) => {
  return (
    <Details {...props}>
      <Record field="diameter" label="Diameter"/>
      <Record field="population" label="Population"/>
    </Details>
  )
};


const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getPlanet
  }
}

export default withApiService(mapMethodsToProps)(PlanetsDetails);