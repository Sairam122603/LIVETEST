import React from "react";
import payrollData from "../data";

function Header() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={payrollData.company.logo} alt="Company Logo" style={{ maxWidth: "100px" }} />
      <h2>{payrollData.company.name}</h2>
      <p>{payrollData.company.address}</p>
    </div>
  );
}

export default Header;