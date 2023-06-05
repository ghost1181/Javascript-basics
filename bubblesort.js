// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generate an array of 5 random numbers
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    numbers.push(getRandomNumber(1, 100));
  }
  
  console.log("Original Numbers:", numbers);
  
  // Bubble sort algorithm
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        // Swap the numbers
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  
  console.log("Sorted Numbers:", numbers);
  