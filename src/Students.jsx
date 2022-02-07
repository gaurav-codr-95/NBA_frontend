import React from "react";

const Students = () => {
  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-9 col-md-7 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2">Add Students</h4>
          <label for="rollno" class="form-label">Roll No.</label>
          <input type="text" class="form-control" id="rollno"/>
        </div>
        <div class="mb-3">
          <label for="stname" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="stname"/>
        </div>
        <div class="mb-3">
          <label for="batch" class="form-label">Batch</label>
          <input type="text" class="form-control" id="batch"/>
        </div>
        <div class="mb-3">
          <label for="branch" class="form-label">Branch</label>
          <input type="text" class="form-control" id="branch"/>
        </div>
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger">Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Students;
