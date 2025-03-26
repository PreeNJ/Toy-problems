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
