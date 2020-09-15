import React from 'react';
import Details, { Record } from '../details';
import { withApiService } from '../hoc-helpers';

const PeopleDetails = (props) => {
  return (
    <Details {...props}>
      <Record field="birthYear" label="Birth Year"/>
      <Record field="gender" label="Gender"/>
      <Record field="height" label="Height"/>
      <Record field="mass" label="Mass"/>
      <Record field="eyeColor" label="Eye Color"/>
    </Details>
  )
};

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getPerson
  }
}

export default withApiService(PeopleDetails, mapMethodsToProps);