import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
console.log('hellloooo');

// fetch('https://swapi.dev/api/people/1/')
// .then(res => {
//   return res.json();
// })
// .then(res => {
//   console.log({ res });
// })
