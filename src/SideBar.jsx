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


export default function SideBar(props) {


  const handleClick = (v) => {
    props.setComponent(v);
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
                  <a className="nav-link" aria-current="page" href="#" onClick={() => handleClick(<Midterm1Co />)}>
                    Add Mid Term 1 COS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"  onClick={() => handleClick(<Midterm1Marks />)}>
                    Add Mid Term 1 Marks
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"  onClick={() => handleClick(<Midterm2Co />)}>
                    Add Mid Term 2 COS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => handleClick(<Midterm2Marks />)}>
                    Add Mid Term 2 Marks
                  </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                      id="dropdownUser2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <strong className="mx-3">Display Marks</strong>
                    </a>
                    <ul
                      className="dropdown-menu text-small shadow"
                      aria-labelledby="dropdownUser2"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Student Details
                        </a>
                        <a className="dropdown-item" href="#">
                          Mid Term - 1 CO Scheme
                        </a>
                        <a className="dropdown-item" href="#">
                          Mid Term - 1 Marks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Mid Term - 2 CO Scheme
                        </a>
                        <a className="dropdown-item" href="#">
                          Mid Term - 2 Marks
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
    
  
}

