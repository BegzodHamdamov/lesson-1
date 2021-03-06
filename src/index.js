import React from 'react';
import ReactDOM from 'react-dom';
import './Header/Header.css';
import Header from './Header/Header';
import TopSection from './TopSection/TopSection';
import './TopSection/TopSection.css';
import './MiddlePart/MiddlePart.css';
import MiddlePart from './MiddlePart/MiddlePart';
import LowerPart from './LowerPart/LowerPart';
import './LowerPart/LowerPart.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render( < React.StrictMode >
    <
    Header / >
    <
    TopSection / >
    <
    MiddlePart / >
    <
    LowerPart / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();