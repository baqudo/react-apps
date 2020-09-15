import React from 'react';
import Details, { Record } from '../details';
import { withApiService } from '../hoc-helpers';

const PeopleDetails = ({ id, apiService }) => {
  return (
    <Details 
      id={id}
      type="people"
      getData={apiService.getPerson}
    >
      <Record field="birthYear" label="Birth Year"/>
      <Record field="gender" label="Gender"/>
      <Record field="height" label="Height"/>
      <Record field="mass" label="Mass"/>
      <Record field="eyeColor" label="Eye Color"/>

    </Details>
  )
};

export default withApiService(PeopleDetails);