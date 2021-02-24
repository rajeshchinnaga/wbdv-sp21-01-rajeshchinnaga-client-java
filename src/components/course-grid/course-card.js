import React, {useState} from 'react'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {deleteCourse} from "../../services/course-service";
import '../../styles/course-card.css'
import b from "../../images/bootstrap.png";
import j from "../../images/js.jpg";
import h from "../../images/htmlcss.png";
import n from "../../images/node.png";
import r from "../../images/react.png";
import m from "../../images/mysql.png";
import CourseGridComponent from "../../testing/CourseGridComponent";
const CourseCard = ({
                        deleteCourse,
                        updateCourse,
                        course}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    const courses = [
        {title: "Bootstrap", image: b, editing: true},
        {title: "JavaScript", image: j},
        {title: "HTML", image: h},
        {title: "Node.js", image: n},
        {title: "React.js", image: r},
        {title: "MySQL", image: m},
    ]
    return(
        <div className="margin-body col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            {/*<div className="card col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">*/}
            {/*<div className="container">*/}
            {/*<div className="border">*/}
            <img className="card-img"
                 src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                 alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                {
                    editing &&
                    <input className="form-control"
                           onChange={(event) =>
                               setNewTitle(event.target.value)}
                           value={newTitle}/>
                }
                <p className="card-text">Skills</p>
                <Link to="/editor" className="btn btn-primary">
                    {course.title}
                </Link>
            </div>
            {
                !editing &&
                <i onClick={() => setEditing(true)}
                   className="btn fa fa-edit float-right"></i>
            }
            {
                editing &&
                <i onClick={() => saveTitle()}
                   className="check-on-image mt-2 fas fa-check"></i>
            }
            {
                editing &&
                <i onClick={() => deleteCourse(course)}
                   className="trash-on-image mt-2 fas fa-trash"></i>
            }
            {/*</div>*/}
        </div>
    )
}

export default CourseCard