import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [value, setValue] = useState(0);
  const [isVisible, setVisibility] = useState(true);

  return (
    <div>
      <button onClick={() => setValue((s) => s + 1)}>+</button>
      
      {isVisible
        ? <button onClick={() => setVisibility(false)}>hide</button>
        : <button onClick={() => setVisibility(true)}>show</button>
      }

      {isVisible ? <HookCounter value={value}/> : null}

      {isVisible ? <Notification value={value}/> : null}
    </div>
  )
};

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log('onMount');
    return () => console.log('onUnmount');
  }, []);

  useEffect(() => console.log('onUpdate'));

  return (
    <p>{ value }</p>
  )
};

const Notification = () => {
  const [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisibility(false), 1500)

    return () => clearTimeout(timeout);
  }, []);

  return isVisible
    ? (
      <div><p>Notification</p></div>
    )
    : null;
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

