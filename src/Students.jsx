import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"



const Students = () => {
  const [rollno,setRollno]=useState('')
  const [studentName,setStudentName]=useState('')
  const [batch,setBatch]=useState('')
  const [branch,setBranch]=useState('')


  const handleClick=async()=>{

    var body = { rollno: rollno, name: studentName, batch: batch, branch: branch };

    

   
    

    var result = await postData('student/addnewstudent',body)
    

}

  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-9 col-md-7 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2">Add Students</h4>
          <label for="rollno" class="form-label">Roll No.</label>
          <input type="text" class="form-control" id="rollno" onChange={event=>setRollno(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="stname" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="stname" onChange={event=>setStudentName(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="batch" class="form-label">Batch</label>
          <input type="text" class="form-control" id="batch" onChange={event=>setBatch(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="branch" class="form-label">Branch</label>
          <input type="text" class="form-control" id="branch" onChange={event=>setBranch(event.target.value)}/>
        </div>
        <div class="d-grid mb-4">
        <button type="button" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Students;
