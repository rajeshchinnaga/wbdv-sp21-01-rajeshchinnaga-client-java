import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import CourseTable from "../course-table/course-table";
import CourseRow from "../course-table/course-row";
import CourseCard from "./course-card";


const CourseGrid = ({courses,deleteCourse,updateCourse}) => {

    return(
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th className="d-md-none"></th>
                    <th className="d-md-none"></th>
                    <th className="d-md-none"></th>
                    <th className="d-md-none"></th>
                    <th className="d-md-none"></th>
                    <th className="d-md-none"></th>
                    <th className="d-none d-md-table-cell">Recent Documents</th>
                    <th className="d-none d-md-table-cell">
                        Owned by me<i className="fa fa-arrow-down"></i>
                    </th>
                    <th></th>
                    <th>
                        <Link to="#">
                            <i className="fa fa-folder fa-2x"/>
                        </Link>
                        {/*</th>*/}
                        {/*<th>*/}
                        <Link to="#">
                            <i className="ml-2 fa fa-sort-alpha-up-alt fa-2x"/>
                        </Link>
                        {/*</th>*/}
                        {/*<th>*/}
                        <Link to="/courses/table">
                            <i className="ml-2 fa fa-list fa-2x"></i>
                        </Link>
                    </th>
                </tr>
                </thead>
            </table>
            <div className="row container-fluid">
                {
                    courses.map(course =>
                        <CourseCard course={course}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}/>
                    )
                }
            </div>
        </div>

    )
}

export default CourseGrid