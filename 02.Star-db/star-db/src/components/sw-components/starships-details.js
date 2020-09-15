import React from 'react';
import Details, { Record } from '../details';
import { APIConsumer } from '../api-context';

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

export default StarshipsDetails;