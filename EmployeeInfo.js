import React from "react";
import payrollData from "../data";

function EmployeeInfo() {
  return (
    <div>
      <p>Name: {payrollData.employee.name}</p>
      <p>Employee No: {payrollData.employee.id}</p>
      <p>Paw days: {payrollData.employee.daysWorked}</p> 
    </div>
  );
}

export default EmployeeInfo;