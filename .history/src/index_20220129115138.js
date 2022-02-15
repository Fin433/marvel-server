import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr.length % 2 === 0 ? 0 : 1);
