import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';
import Midterm1Co from './Midterm1Co';
import Midterm1Marks from './Midterm1Marks';
import Midterm2co from './Midterm2Co';
import Midterm2Marks from './Midterm2Marks';
import Students from './Students';
import DisplayStudent from './DisplayStudent';
import DisplayMidTerm1Co from './DisplayMidTerm1Co';
import DisplayMidTerm2Marks from './DisplayMidTerm2Marks';
import DisplayMidTerm2Co from './DisplayMidTerm2Co';
import DisplayMidTerm1Marks from './DisplayMidTerm1Marks';








function App(props) {
    return (
      <div>
        <Router>
          <Route
      strict
      exact
      component={Home}
      path="/home"
      history={props.history}
      />
  
          <Route
            strict
            exact
            component={Login}
            path="/login"
            history={props.history}
          />

          <Route
            strict
            exact
            component={Students}
            path="/students"
            history={props.history}
          />
  
          <Route
            strict
            exact
            component={Dashboard}
            path="/dashboard"
            history={props.history}
          />
  
       <Route
            strict
            exact
            component={Register}
            path="/register"
            history={props.history}
          />
  
  
  <Route
            strict
            exact
            component={Midterm1Marks}
            path="/midterm1marks"
            history={props.history}
          />
  
      <Route
            strict
            exact
            component={Midterm1Co}
            path="/midterm1co"
            history={props.history}
          />
  
       <Route
            strict
            exact
            component={Midterm2Marks}
            path="/midterm2marks"
            history={props.history}
          />
  
      <Route
            strict
            exact
            component={Midterm2co}
            path="/midterm2co"
            history={props.history}
          />

      <Route
            strict
            exact
            component={DisplayStudent}
            path="/displaystudent"
            history={props.history}
          />

      <Route
            strict
            exact
            component={DisplayMidTerm1Co}
            path="/displaymidterm1co"
            history={props.history}
          />


     <Route
            strict
            exact
            component={DisplayMidTerm1Marks}
            path="/displaymidterm1marks"
            history={props.history}
          />


     <Route
            strict
            exact
            component={DisplayMidTerm2Co}
            path="/displaymidterm2co"
            history={props.history}
          />


     <Route
            strict
            exact
            component={DisplayMidTerm2Marks}
            path="/displaymidterm2marks"
            history={props.history}
          />
  
     
  
        </Router>
      </div>
    );
  }
  
  export default App;
  






