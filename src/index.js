import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@material-ui/core'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CourseManager from "./components/course-manager";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

reportWebVitals();