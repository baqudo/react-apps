import React from 'react';
import { APIConsumer } from '../api-context';

const withApiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <APIConsumer>
        {
          (apiService) => {
            const serviceProps = mapMethodsToProps(apiService);
            return (
              <Wrapped {...props} {...serviceProps}>
              </Wrapped>
            )
          }
        }
      </APIConsumer>
    )
  }
};

export default withApiService;