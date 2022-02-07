import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Forms from './Forms';
import './App.css';
import Dashboard from './Dashboard';





const App =() => {
    return(
    <>
        
        <Switch>
        <Route exact path="/Home" component = {Home} />
        <Route exact path="/Forms" component = {Forms} />
        <Route exact path="/Login" component = {Login} />
        <Route exact path="/Dashboard" component = {Dashboard} />
        <Route exact path="/Register" component = {Register} />
        <Redirect to ="/Home"></Redirect>
        </Switch>
    </>
    );
};
export default App;