import React from "react";
import payrollData from "../data";

function Footer() {
  return (
    <div>
      <p>Bank Name: {payrollData.bank.name}</p>
      <p>Ale No: {payrollData.bank.accountNumber}</p>
      <p>DAN NO: {payrollData.bank.danNumber}</p>
      <p>PF N: {payrollData.bank.pfNumber}</p>
    </div>
  );
}

export default Footer;