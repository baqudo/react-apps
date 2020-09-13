import React from 'react';

const Row = ({ left, right }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-4">
        { left }
      </div>
      <div className="col-12 col-md-8">
        { right }
      </div>
    </div>
  )
}

export default Row;