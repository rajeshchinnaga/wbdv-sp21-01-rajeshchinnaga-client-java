import React from "react";
import {Link} from "react-router-dom";
import '../../styles/course-editor.css'
const CourseEditor = ({history}) => {
    return(
        <div>
            <div className="bg-dark text-light">
                <ul className="m-0 p-0">
                    <ul className="nav nav-tabs" role="tablist">
                        <li><a className="btn btn-dark" href="#"><i onClick={() => history.goBack()} className="fas fa-times-circle"></i></a></li>
                        <li><a className="btn btn-dark" href="#"> CS5610 - Web Dev</a></li>
                        <li><a className="btn btn-dark" href="#">Home</a></li>
                        <li><a className="btn btn-dark" href="#">Build</a></li>
                        <li><a className="btn btn-dark" href="#">Pages</a></li>
                        <li><a className="btn btn-dark" href="#">Theme</a></li>
                        <li><a className="btn btn-dark" href="#">Store</a></li>
                        <li><a className="btn btn-dark" href="#">Apps</a></li>
                        <li><a className="btn btn-dark" href="#">Settings</a></li>
                        <li><a className="btn btn-dark" href="#"><i className="fas fa-plus"></i></a></li>
                    </ul>
                </ul>
            </div>

            <div className="row m-0">
                <div className="col-2 bg-dark text-light">
                    <nav className="nav flex-column">
                        <ul className="list-group">
                            <li className="m-2 list-group-item nav-link bg-dark">Module 1- jQuery
                                <div className="float-right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </li>
                            <li className="m-2 list-group-item nav-link bg-dark active">
                                Module 2 - React
                                <div className="float-right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </li>
                            <li className="m-2 list-group-item nav-link bg-dark">Module 3 - Redux
                                <div className="float-right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </li>
                            <li className="m-2 list-group-item nav-link bg-dark">Module 4 - Native
                                <div className="float-right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </li>
                            <li className="list-group-item nav-link bg-dark">Module 5 - Angular
                                <div className="float-right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </li>
                            <li className="m-2 list-group-item nav-link bg-dark">Module 6 - Node
                                <div className="float-right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </li>
                            <li className="m-2 list-group-item nav-link bg-dark">Module 7 - Mongo
                                <div className="float-right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </li>
                            <li className="mx-auto">
                                <i className="btn text-light list-group-item bg-dark fas fa-plus"></i>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div clas="col-10">
                    <ul className="m-2 nav nav-pills">
                        <li className="nav-item">
                            <a className="btn btn-dark nav-link active p-1 mr-3" aria-current="page" href="#">Topic
                                1</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-dark nav-link  p-1 mr-3" aria-current="page" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-dark nav-link  p-1 mr-3" aria-current="page" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-dark nav-link  p-1 mr-3" aria-current="page" href="#">Topic 4</a>
                        </li>
                        <li>
                            <i className="btn btn-dark fas fa-plus"></i>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CourseEditor