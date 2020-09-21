import React from 'react';
import Details, { Record } from '../details';
import { withApiService } from '../hoc-helpers';

const StarshipsDetails = (props) => {
  return (
    <Details {...props}>
      <Record field="model" label="Model"/>
      <Record field="length" label="Length"/>
      <Record field="costInCredits" label="Cost"/>
      <Record field="manufacturer" label="Manufacturer"/>
    </Details>
  )
};

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getStarships
  }
}

export default withApiService(mapMethodsToProps)(StarshipsDetails);