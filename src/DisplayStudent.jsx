import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"




const DisplayStudent=()=>{
         const [list,setList]=useState([])
         const [search,setSearch]=useState("")


    const fetchAllStudent=async()=>{
        var result = await getData("student/displayallstudents")
        setList(result)
        // alert(JSON.stringify(result))

        }
    
    useEffect(()=>{
            fetchAllStudent()
            // alert(1)
    },[])


        const filltable =()=>{
        return list.filter((val)=>{
            if(search===""){
                return val 
            }else if (val.name.toLowerCase().includes(search.toLowerCase()) || val.rollno.toLowerCase().includes(search.toLowerCase()) || val.branch.toLowerCase().includes(search.toLowerCase()) || val.batch.toLowerCase().includes(search.toLowerCase()) ){
                return val
            }
        }).map((item) => {
            return (
                <tr className='d-flex'>
                        <th scope="row" className='col-2'>{item.rollno}</th>
                        <td className='col-2'>{item.name}</td>
                        <td className='col-2'>{item.branch}</td>
                        <td className='col-2'>{item.batch}</td>
                    </tr>
            )
        });
    }




    return(
        <div className='container'>
           
        <h4>Student Details</h4>
        <input class="form-control search" type="text" placeholder="Search...." aria-label="Search a record" onChange={event=>{setSearch(event.target.value)}}></input>
               <table class="table table-hover table-dark">
                         <thead>
                            <tr className='d-flex'>
                                <th scope="col" className='col-2'>Roll Number</th>
                                <th scope="col" className='col-2'>Name</th>
                                <th scope="col" className='col-2'>Branch</th>
                                <th scope="col" className='col-2'>Batch</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                           {filltable()}
                            
        
                            
                         </tbody>
                     </table>
             </div>
    )
}

export default DisplayStudent;
