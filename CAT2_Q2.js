function calculateNetPay() {
    // Get employee information from user input
    const employeeName = prompt("Enter employee name:");
    const hoursWorked = parseFloat(prompt("Enter hours worked:"));
    const ratePerHour = parseFloat(prompt("Enter rate per hour (in numbers):"));

    // Calculate basic pay
    const basicPay = hoursWorked * ratePerHour;

    // Calculate tax based on basic pay
    let tax;
    if (basicPay <= 20000) {
        tax = 0;
    } else if (basicPay <= 50000) {
        tax = basicPay * 0.1; // 10% tax
    } else {
        tax = basicPay * 0.2; // 20% tax
    }

    // Calculate net pay
    const netPay = basicPay - tax;

    // Display results
    alert(`Employee Name: ${employeeName}\nBasic Pay: ${basicPay.toFixed(2)}\nTax: ${tax.toFixed(2)}\nNet Pay: ${netPay.toFixed(2)}`);
}

calculateNetPay(); // Call the function to calculate
