// Get the first command-line argument.
const arg = process.argv[2];

// Attempt to convert the argument to an integer.
const size = parseInt(arg);

// Check if the size is a valid number.
if (isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  // If the size is a positive number, proceed to print the square.
  // Initialize an empty string to build each row of 'X's.
  let row = "";
  for (let i = 0; i < size; i++) {
    row += "X"; // Build a single row of 'X's
  }

  // Use a loop to print the 'row' string 'size' number of times.
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
}
// If size is 0 or negative, the 'else if (size > 0)' condition is false,
// and no 'console.log' will be executed, matching the example output.
