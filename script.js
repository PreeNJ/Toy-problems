function getGrade() {
  let marks = parseInt(prompt("Enter student marks (0-100):"));

  if (marks > 79 && marks <= 100) {
    console.log("Grade: A");
  } else if (marks >= 60 && marks <= 79) {
    console.log("Grade: B");
  } else if (marks >= 50 && marks <= 59) {
    console.log("Grade: C");
  } else if (marks >= 40 && marks <= 49) {
    console.log("Grade: D");
  } else if (marks >= 0 && marks < 40) {
    console.log("Grade: E");
  } else {
    console.log("Invalid input! Please enter a number between 0 and 100.");
  }
}

getGrade();

function speedDetector() {
    let speed = parseInt(prompt("Enter car speed:")); // Prompt user for speed

    const speedLimit = 70; // Speed limit
    const kmPerPoint = 5; // Points given for every 5km/h above limit
    const maxPoints = 12; // Max points before suspension

    if (speed < speedLimit) {
        console.log("Ok"); // Speed is within the limit
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint); // Calculate demerit points
        if (points > maxPoints) {
            console.log("License suspended"); // If points exceed 12, suspend license
        } else {
            console.log(`Points: ${points}`); // Otherwise, display demerit points
        }
    }
}

function speedDetector() {
    let speedInput = prompt("Enter car speed:");

    // Ensure input is a number
    if (speedInput === null || speedInput.trim() === "" || isNaN(speedInput)) {
        console.log("Invalid input! Please enter a valid number.");
        return;
    }

    let speed = parseInt(speedInput);

    // Ensure speed is within a valid range
    if (speed < 0 || speed > 1000) {  // Assuming no unrealistic speeds above 1000 km/h
        console.log("Invalid input! Please enter a number between 0 and 1000.");
        return;
    }

    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > maxPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

speedDetector();

function calculateNetSalary() {
    let basicSalaryInput = prompt("Enter your basic salary:");
    let benefitsInput = prompt("Enter your benefits amount:");

    // Validate input to prevent NaN errors
    if (!basicSalaryInput || isNaN(basicSalaryInput) || !benefitsInput || isNaN(benefitsInput)) {
        console.log("Invalid input! Please enter valid numeric values.");
        return;
    }

    let basicSalary = parseFloat(basicSalaryInput);
    let benefits = parseFloat(benefitsInput);
    
    let grossSalary = basicSalary + benefits;

    // Calculate deductions
    let payeeTax = calculateTax(grossSalary);
    let nhifDeduction = calculateNHIF(grossSalary);
    let nssfDeduction = calculateNSSF(grossSalary);

    let netSalary = grossSalary - (payeeTax + nhifDeduction + nssfDeduction);

    // Displaying output clearly in console
    console.log("==== Salary Breakdown ====");
    console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
    console.log(`PAYE (Tax): KES ${payeeTax.toFixed(2)}`);
    console.log(`NHIF Deduction: KES ${nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deduction: KES ${nssfDeduction.toFixed(2)}`);
    console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
}

// Function to calculate PAYE tax
function calculateTax(salary) {
    let tax = 0;
    if (salary <= 24000) {
        tax = salary * 0.1;
    } else if (salary <= 32333) {
        tax = (24000 * 0.1) + ((salary - 24000) * 0.25);
    } else {
        tax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((salary - 32333) * 0.3);
    }
    return tax;
}

// Function to calculate NHIF deductions
function calculateNHIF(salary) {
    if (salary <= 5999) return 150;
    else if (salary <= 7999) return 300;
    else if (salary <= 11999) return 400;
    else if (salary <= 14999) return 500;
    else if (salary <= 19999) return 600;
    else if (salary <= 24999) return 750;
    else if (salary <= 29999) return 850;
    else if (salary <= 34999) return 900;
    else if (salary <= 39999) return 950;
    else if (salary <= 44999) return 1000;
    else if (salary <= 49999) return 1100;
    else if (salary <= 59999) return 1200;
    else if (salary <= 69999) return 1300;
    else if (salary <= 79999) return 1400;
    else if (salary <= 89999) return 1500;
    else if (salary <= 99999) return 1600;
    else return 1700;
}

// Function to calculate NSSF deduction
function calculateNSSF(salary) {
    return Math.min(salary * 0.06, 1800);
}

// Call function to run the program
calculateNetSalary();
