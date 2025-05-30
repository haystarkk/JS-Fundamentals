// This function will perform the addition.
function add(a, b) {
  return a + b;
}

// Get the first argument from the command line and convert it to an integer.
// If the argument is missing or not a valid number, parseInt will return NaN.
const num1 = parseInt(process.argv[2]);

// Get the second argument from the command line and convert it to an integer.
// If the argument is missing or not a valid number, parseInt will return NaN.
const num2 = parseInt(process.argv[3]);

// Call the 'add' function with the converted numbers and print the result.
// If num1 or num2 is NaN, their sum will also be NaN, matching the example output.
console.log(add(num1, num2));
