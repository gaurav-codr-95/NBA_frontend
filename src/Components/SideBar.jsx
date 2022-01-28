import React, { Component } from 'react';

class Main extends Component {
  render() {
    return <div className='container-fluid'>
      <div className='row'>
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Mr. Ravi Parashar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Dr. Pradeep Yadav
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Mrs. Archana Tomar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Mr. D.D. Shrivastava
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Mr. Deepak Gupta
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>;
  }
}

export default Main;
