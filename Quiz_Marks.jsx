import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const Quiz_Marks = () => {

  const [subjectCode,setSubjectCode]=useState('')
  const [rollno,setRollno]=useState('')
  const [markOfQ1a,setMarkOfQ1a]=useState('')
  const [markOfQ1b,setMarkOfQ1b]=useState('')
  const [markOfQ1c,setMarkOfQ1c]=useState('')
  const [markOfQ1d,setMarkOfQ1d]=useState('')
  const [markOfQ1e,setMarkOfQ1e]=useState('')
  const [markOfQ2a,setMarkOfQ2a]=useState('')
  const [markOfQ2b,setMarkOfQ2b]=useState('')
  const [markOfQ2c,setMarkOfQ2c]=useState('')
  const [markOfQ3,setMarkOfQ3]=useState('')
  const [markOfQ4,setMarkOfQ4]=useState('')


  const handleClick=async()=>{

    var body = { subcode: subjectCode , rollno: rollno, mark_of_q1a: markOfQ1a, mark_of_q1b: markOfQ1b, mark_of_q1c: markOfQ1c, mark_of_q1d: markOfQ1d, mark_of_q1e: markOfQ1e, mark_of_q2a: markOfQ2a, mark_of_q2b: markOfQ2b, mark_of_q2c: markOfQ2c, mark_of_q3: markOfQ3, mark_of_q4: markOfQ4 };

    

   
    

    var result = await postData('midterm1/addmidterm1_marks',body)
    

}

  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-9 col-md-7 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2">Add Quiz Marks</h4>
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode" onChange={event=>setSubjectCode(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="roll_no" class="form-label">Student Rollno</label>
          <input type="text" class="form-control" id="roll_no" onChange={event=>setRollno(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Quiz-1" class="form-label">Marks of Quiz-1</label>
          <input type="text" class="form-control" id="Marks_Quiz-1" onChange={event=>setMarkOfQ1a(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Quiz-2" class="form-label">Marks of Quiz-2</label>
          <input type="text" class="form-control" id="Marks_Quiz-2" onChange={event=>setMarkOfQ1b(event.target.value)}/>
        </div>
        
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Quiz_Marks;
