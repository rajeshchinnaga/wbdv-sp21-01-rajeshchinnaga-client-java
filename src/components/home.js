import React from 'react'
import {BrowserRouter, Link} from "react-router-dom";

const HomePage = () =>

    <div>
        <BrowserRouter>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="/courses/table" className="list-group-item">
                Courses Table
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Courses Grid
            </Link>
            <Link to="/editor" className="list-group-item">
                Course Editor
            </Link>
        </div>
        </BrowserRouter>
    </div>
export default HomePage