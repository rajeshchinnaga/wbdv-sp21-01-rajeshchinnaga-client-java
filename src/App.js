import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import CourseGrid from "./components/course-grid/course-grid";
import CourseTable from "./components/course-table/course-table";
import React from "react";
import Quiz from "./components/quizzes/quiz";
import QuizzesList from "./components/quizzes/quizzes-list";
function App() {
    return (
        <BrowserRouter>
            <Route path="/courses" component={CourseManager}/>
            <Route path="/courses/:courseId/quizzes/:quizId" component={Quiz}/>
            <Route path ="/courses/:courseId/quizzes" exact={true}  component={QuizzesList}/>
            <Route path="/editor" render={(props) =>
                <CourseEditor {...props}/>}/>
        </BrowserRouter>
    );
}
export default App;