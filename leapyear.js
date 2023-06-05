// Get the current year
const currentYear = new Date().getFullYear();

// Calculate the next 100 years
const next100Years = currentYear + 100;

// Array to store leap years
const leapYears = [];

// Check each year for leapness
for (let year = currentYear; year <= next100Years; year++) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    leapYears.push(year);
  }
}

// Print the leap years
console.log("Leap years in the next 100 years:");
leapYears.forEach((year) => {
  console.log(year);
});
