import React from 'react';

export default () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow text-dark m-1" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger m-1" role="status" style={{animationDelay: '-0.65s'}}>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-dark m-1" role="status" style={{animationDelay: '-0.55s'}}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}