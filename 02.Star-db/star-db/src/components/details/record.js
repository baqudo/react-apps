import React from 'react';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between" key={field}>
      <span className="label">{label}:</span>
      <span className="value">{(item && item[field]) || field}</span>
    </li>
  )
}

export default Record;