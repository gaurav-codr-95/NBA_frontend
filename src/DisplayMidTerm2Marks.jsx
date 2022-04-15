import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const DisplayMidTerm2Marks = () => {


    const [list,setList]=useState([])
    const [search,setSearch]=useState("")



    const fetchAllMidterm2marks=async()=>{
        var result = await getData("midterm2/displayallmidterm2_marks")
        setList(result)
        // alert(JSON.stringify(result))

        }
    
    useEffect(function(){
            fetchAllMidterm2marks()
            // alert(1)
    },[])
    const filltable =()=>{
        return list.filter((val)=>{
            if(search===""){
                return val 
            }else if (val.subcode.toLowerCase().includes(search.toLowerCase()) || val.rollno.toLowerCase().includes(search.toLowerCase()) || val.totalmarks.toString().toLowerCase().includes(search.toLowerCase())  ){
                return val
            }
        }).map((item) => {
            return (
                <tr className='d-flex'>
                            <th scope="row" className='col-2'>{item.subcode}</th>
                            <td className='col-2'>{item.rollno}</td>
                            <td className='col-2'>{item.totalmarks}</td>
                        </tr>
            )
        });
    }
        return( <div>
            <div className='container'>
                <h4>Mid Term-2 Marks</h4>
                <input class="form-control search" type="text" placeholder="Search...." aria-label="Search a record" onChange={event=>{setSearch(event.target.value)}}></input>

                <table class="table table-hover table-dark">
                    <thead>
                        <tr className='d-flex'>
                            <th scope="col" className='col-2'>Subject Code</th>
                            <th scope="col" className='col-2'>Roll Number</th>
                            <th scope="col" className='col-2'>Total Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {filltable()}
                    </tbody>
                </table>
            </div>

        </div>
        )
}

export default DisplayMidTerm2Marks;
