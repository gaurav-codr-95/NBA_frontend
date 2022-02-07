import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return <>
          <div className="container-fluid ">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="./Student.jsx">
                    Add Student
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Add Mid Term 1 COS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Add Mid Term 1 Marks
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Add Mid Term 2 COS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
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
    </>
    
  }
}

export default SideBar;