import React from 'react';
import Details, { Record } from '../details';
import { API } from '../../services';

const APIService = new API();

const {
  getPerson,
  getPlanet,
  getStarship
} = APIService;

const PeopleDetails = ({ id }) => {
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
};
const PlanetsDetails = ({ id }) => {
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
};

const StarshipsDetails = ({ id }) => {
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
};

export {
  PeopleDetails,
  PlanetsDetails,
  StarshipsDetails
}