import React from "react";

const Midterm2Co = () => {
  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-9 col-md-7 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2">Add Mid term - 2 CO Scheme</h4>
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode"/>
        </div>
        <div class="mb-3">
          <label for="Co_A" class="form-label">CO A</label>
          <input type="text" class="form-control" id="Co_A"/>
        </div>
        <div class="mb-3">
          <label for="Co_B" class="form-label">CO B</label>
          <input type="text" class="form-control" id="Co_B"/>
        </div>
        <div class="mb-3">
          <label for="Co_C" class="form-label">CO C</label>
          <input type="text" class="form-control" id="Co_C"/>
        </div>
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger">Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Midterm2Co;
