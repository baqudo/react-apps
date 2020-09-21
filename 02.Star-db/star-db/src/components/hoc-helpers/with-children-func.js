import React from 'react';

const withChildrenFunc = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

export default withChildrenFunc;