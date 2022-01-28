import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Login from './Login';




const App =() => {
    return(
    <>
        <Switch>
        <Route exact path="/Home" component = {Home} />
        <Route exact path="/Register" component = {Register} />
        <Route exact path="/Login" component = {Login} />
        <Redirect to ="/Home"></Redirect>
        </Switch>
    </>
    );
};
export default App;