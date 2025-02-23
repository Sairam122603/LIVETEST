import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function FormComponent() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    navigate('/earning');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enoylity Media Creations Private Limited</h1>
        <h2>Bangalore, Karnataka</h2>
      </header>
      <main>
        <h2>Payslip Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="employee_name">Employee Name</label>
              <input type="text" id="employee_name" name="employee_name" />
            </div>
            <div className="form-group">
              <label htmlFor="employee_id">Employee ID</label>
              <input type="text" id="employee_id" name="employee_id" />
            </div>
            <div className="form-group">
              <label htmlFor="designation">Designation</label>
              <input type="text" id="designation" name="designation" />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input type="text" id="department" name="department" />
            </div>
            <div className="form-group">
              <label htmlFor="bank_name">Bank Name</label>
              <input type="text" id="bank_name" name="bank_name" />
            </div>
            <div className="form-group">
              <label htmlFor="account_number">Account Number</label>
              <input type="text" id="account_number" name="account_number" />
            </div>
            <div className="form-group">
              <label htmlFor="uan_number">UAN Number</label>
              <input type="text" id="uan_number" name="uan_number" />
            </div>
            <div className="form-group">
              <label htmlFor="pf_number">PF Number</label>
              <input type="text" id="pf_number" name="pf_number" />
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}

export default FormComponent;