import React from 'react';
import Details, { Record } from '../details';
import { APIConsumer } from '../api-context';

const PeopleDetails = ({ id }) => {
  return (
    <APIConsumer>
      {
        ({ getPerson }) => {
          return (
            <Details 
              id={id}
              type="people"
              getData={getPerson}
            >
              <Record field="birthYear" label="Birth Year"/>
              <Record field="gender" label="Gender"/>
              <Record field="height" label="Height"/>
              <Record field="mass" label="Mass"/>
              <Record field="eyeColor" label="Eye Color"/>

            </Details>
          )
        }
      }
    </APIConsumer>
  )
};
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

const StarshipsDetails = ({ id }) => {
  return (
    <APIConsumer>
      {
        ({ getStarship }) => {
          return (
            <Details 
              id={id}
              type="starships"
              getData={getStarship}
              >
        
              <Record field="model" label="Model"/>
              <Record field="length" label="Length"/>
              <Record field="costInCredits" label="Cost"/>
              <Record field="manufacturer" label="Manufacturer"/>
        
            </Details>
          )
        }
      }
    </APIConsumer>
  )
};

export {
  PeopleDetails,
  PlanetsDetails,
  StarshipsDetails
}