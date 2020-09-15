import React from 'react';
import { APIConsumer } from '../api-context';

const withApiService = (Wrapped) => {
  return (props) => {
    return (
      <APIConsumer>
        {
          (apiService) => {
            return (
              <Wrapped {...props} apiService={apiService}>
              </Wrapped>
            )
          }
        }
      </APIConsumer>
    )
  }
};

export default withApiService;