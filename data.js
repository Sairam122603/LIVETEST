const payrollData = {
  company: {
    logo: "C:\\Users\\saira\\livetest\\payslip-generator\\public\\enoylity-final-logo.webp.png", 
    name: "ENOYLITY MEDIA CREATI",
    address: "rasto",
  },
  employee: {
    name: "Jyothi Sairam",
    id: "12345",
    daysWorked: 30,
  },
  earnings: [
    { label: "Basic Salary", amount: 50000 },
    { label: "HRA", amount: 10000 },
    { label: "Overtime", amount: 5000 },
    { label: "Special Allowance", amount: 3000 },
  ],
  deductions: [
    { label: "EPF", amount: 2000 },
    { label: "Tax", amount: 200 },
    { label: "TDS", amount: 500 },
  ],
  bank: {
    name: "SBI",
    accountNumber: "1234567890",
    uanNumber: "213456",
    pfNumber: "123456",
  },
};

export default payrollData;