import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import SideBar from './SideBar';

export default function DashBoard() {
    const [view,setView]=React.useState("")

    const setComponent=(v)=>{
        setView(v)
      
        }
    
        return ( <div>
            <Header/>
            <SideBar setComponent={setComponent}/>
            {view}
        </div>
    )
}

