
import React from "react";

const Midterm2Marks = () => {
  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-9 col-md-7 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2">Add Mid term - 2 Marks</h4>
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode"/>
        </div>
        <div class="mb-3">
          <label for="roll_no" class="form-label">Roll No.</label>
          <input type="text" class="form-control" id="roll_no"/>
        </div>
        <div class="mb-3">
          <label for="total_marks" class="form-label">Total Marks</label>
          <input type="text" class="form-control" id="total_marks"/>
        </div>
        
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger">Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Midterm2Marks;
