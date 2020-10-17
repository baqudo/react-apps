import React, { useEffect, useState, useCallback, useMemo } from 'react';
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

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
  .then(res => res.json())
  .then(data => data);
};

const useRequest = (request) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: null
  }), []);

  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    setDataState(initialState);

    let cancelled = false;  

    request()
      .then(data => !cancelled && setDataState({
        data,
        loading: false,
        error: null
      }))
      .catch(error => !cancelled && setDataState({
        data: null,
        loading: false,
        error
      }));

    return () => cancelled = true;
  }, [ request, initialState ]);

  return dataState;
};

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [ id ]);
  return useRequest(request);
}

const PlanetInfo = ({ id }) => {
  const { data, loading, error } = usePlanetInfo(id);

  if (error) {
    return (
      <div>Error is occured</div>
    )
  }

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>{id} - {data && data.name}</div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

