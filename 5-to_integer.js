// Get the first command-line argument.
const arg = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() will parse a string argument and return an integer.
// If the first character cannot be converted to a number, it returns NaN.
const myNumber = parseInt(arg);

// Check if the result of parseInt is NaN (Not-a-Number).
// isNaN() is used to determine whether a value is an illegal number (Not-a-Number).
if (isNaN(myNumber)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${myNumber}`);
}
