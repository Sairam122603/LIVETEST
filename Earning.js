import React from "react";
import payrollData from "./data";
import './App.css';

function Earning() {
  const totalEarnings = payrollData.earnings.reduce((sum, item) => sum + item.amount, 0);
  const totalDeductions = payrollData.deductions.reduce((sum, item) => sum + item.amount, 0);
  const netPay = totalEarnings - totalDeductions;

  return (
    <div className="earnings-deductions-container">
      <div className="earnings">
        <h3>Earnings</h3>
        <ul>
          {payrollData.earnings.map((item, index) => (
            <li key={index}>
              {item.label}: {item.amount}
            </li>
          ))}
        </ul>
        <p>Total Earnings: {totalEarnings}</p>
      </div>
      <div className="deductions">
        <h3>Deductions</h3>
        <ul>
          {payrollData.deductions.map((item, index) => (
            <li key={index}>
              {item.label}: {item.amount}
            </li>
          ))}
        </ul>
        <p>Total Deductions: {totalDeductions}</p>
      </div>
      <div>
        <h3>Net Pay</h3>
        <p>{netPay}</p>
      </div>
    </div>
  );
}

export default Earning;