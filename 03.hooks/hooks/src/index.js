import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [value, setValue] = useState(1);
  const [isVisible, setVisibility] = useState(true);

  return (
    <div>
      <button onClick={() => setValue((s) => s + 1)}>+</button>
      
      {isVisible
        ? <button onClick={() => setVisibility(false)}>hide</button>
        : <button onClick={() => setVisibility(true)}>show</button>
      }

      <PlanetInfo id={value}/>
    </div>
  )
};

const PlanetInfo = ({ id }) => {
  const [name, setName] = useState('Planet name');

  useEffect(() => {
    let cancelled = false;

    fetch(`https://swapi.dev/api/planets/${id}`)
      .then(res => res.json())
      .then(data => !cancelled && setName(data.name));

    return () => cancelled = true;
  }, [ id ]);

  return (
    <div>{id} - {name}</div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

