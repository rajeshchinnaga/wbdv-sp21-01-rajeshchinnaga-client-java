import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@material-ui/core'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CourseManager from "./components/course-manager";
import CounterUsingReact from "./components/counter/react-state/counter-react";
import CounterUsingRedux from "./components/counter/redux-state/counter-redux";

ReactDOM.render(
    < App/>,
    document.getElementById('root')
);

reportWebVitals();