import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './Context/UseReducer';
import { StateProvider } from './Context/UseContex';

// const savedBasket = JSON.parse(localStorage.getItem("basket"));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);

console.log("App rendered successfully!"); // Add your custom console log here

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
