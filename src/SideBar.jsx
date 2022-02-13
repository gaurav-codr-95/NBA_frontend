import React, { Component } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';
import Midterm1Co from './Midterm1Co';
import Midterm1Marks from './Midterm1Marks';
import Midterm2Co from './Midterm2Co';
import Midterm2Marks from './Midterm2Marks';
import Students from './Students';
import DisplayStudent from './DisplayStudent';
import DisplayMidTerm1Co from './DisplayMidTerm1Co';
import DisplayMidTerm2Marks from './DisplayMidTerm2Marks';
import DisplayMidTerm2Co from './DisplayMidTerm2Co';
import DisplayMidTerm1Marks from './DisplayMidTerm1Marks';



export default function SideBar(props) {


  const handleClick = (v) => {
    props.setComponent(v);
    var header = document.getElementById("sidebarMenu");
    var btns = header.getElementsByClassName("nav-link");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };




  return (
    <div className="container-fluid ">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#" onClick={() => handleClick(<Students />)}>
                  Add Student
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={() => handleClick(<Midterm1Co />)}>
                  Add Mid Term 1 COS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<Midterm1Marks />)}>
                  Add Mid Term 1 Marks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<Midterm2Co />)}>
                  Add Mid Term 2 COS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<Midterm2Marks />)}>
                  Add Mid Term 2 Marks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayStudent />)}>
                  Display All Students
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidTerm1Marks />)}>
                  Display Mid Term 1 Marks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidTerm2Marks />)}>
                  Display Mid Term 2 Marks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidTerm1Co />)}>
                  Display Mid Term 1 Co
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidTerm2Co />)}>
                  Display Mid Term 2 Co
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )


}

