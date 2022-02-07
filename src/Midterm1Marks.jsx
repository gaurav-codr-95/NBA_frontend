
import React from "react";

const Midterm1Marks = () => {
  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-9 col-md-7 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2">Add Mid term - 1 CO Scheme</h4>
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1A" class="form-label">Marks of Q1(A)</label>
          <input type="text" class="form-control" id="Marks_Q1A"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1B" class="form-label">Marks of Q1(B)</label>
          <input type="text" class="form-control" id="Marks_Q1B"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1C" class="form-label">Marks of Q1(C)</label>
          <input type="text" class="form-control" id="Marks_Q1C"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1D" class="form-label">Marks of Q1(D)</label>
          <input type="text" class="form-control" id="Marks_Q1D"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1E" class="form-label">Marks of Q1(E)</label>
          <input type="text" class="form-control" id="Marks_Q1E"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q2A" class="form-label">Marks of Q2(A)</label>
          <input type="text" class="form-control" id="Marks_Q2A"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q2B" class="form-label">Marks of Q2(B)</label>
          <input type="text" class="form-control" id="Marks_Q2B"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q2C" class="form-label">Marks of Q2(C)</label>
          <input type="text" class="form-control" id="Marks_Q2C"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q3A" class="form-label">Marks of Q3(A)</label>
          <input type="text" class="form-control" id="Marks_Q3A"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q3B" class="form-label">Marks of Q3(B)</label>
          <input type="text" class="form-control" id="Marks_Q3B"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q4A" class="form-label">Marks of Q4(A)</label>
          <input type="text" class="form-control" id="Marks_Q4A"/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q4B" class="form-label">Marks of Q4(B)</label>
          <input type="text" class="form-control" id="Marks_Q4B"/>
        </div>
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger">Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Midterm1Marks;
