import React from 'react';
import Details, { Record } from '../details';
import { APIConsumer } from '../api-context';

const PlanetsDetails = ({ id }) => {
  return (
    <APIConsumer>
      {
        ({ getPlanet }) => {
          return (
            <Details 
              id={id}
              type="planets"
              getData={getPlanet}
              >
        
              <Record field="diameter" label="Diameter"/>
              <Record field="population" label="Population"/>
        
            </Details>
          )
        }
      }
    </APIConsumer>
  )
};


export default PlanetsDetails;