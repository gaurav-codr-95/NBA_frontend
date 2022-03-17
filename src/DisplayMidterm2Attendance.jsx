import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"




const DisplayMidterm2Attendance=()=>{
         const [list,setList]=useState([])
         const [search,setSearch]=useState("")

        


    const fetchAllMidterm2=async()=>{
        var result = await getData("extras/displaytotalmidterm2attendance")
        setList(result)
        // alert(JSON.stringify(result))

        }

    
    
    useEffect(()=>{
            fetchAllMidterm2()
            // alert(1)
    },[])


        const filltable =()=>{
            return list.filter((val)=>{
                if(search===""){
                    return val 
                }else if (val.subcode.toLowerCase().includes(search.toLowerCase()) || val.p.toString().toLowerCase().includes(search.toLowerCase())  ){
                    return val
                }
            }).map((item) => {
            return (
                <tr className='d-flex'>
                        <th scope="row" className='col-2'>{item.subcode}</th>
                        <td className='col-2'>{item.p}</td>
                        
                    </tr>
            )
        });
    }




    return(
        <div className='container'>
        <h4>Midterm 2 Attendance</h4>
        <input class="form-control search" type="text" placeholder="Search...." aria-label="Search a record" onChange={event=>{setSearch(event.target.value)}}></input>

               <table class="table table-hover table-dark">
                         <thead>
                            <tr className='d-flex'>
                                <th scope="col" className='col-2'>Subject Code</th>
                                <th scope="col" className='col-2'>Students Attended</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           
                           {filltable()}
                            
        
                            
                         </tbody>
                     </table>

                     
             </div>
    )
}

export default DisplayMidterm2Attendance;
