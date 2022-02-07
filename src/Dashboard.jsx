import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import SideBar from './SideBar';

class Dashboard extends Component {
    render() {
        return <div>
            <Header/>
            <SideBar />
            <Main />
        </div>;
    }
}

export default Dashboard;
