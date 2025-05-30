// Get the first command-line argument.
const firstArg = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() handles various string formats and returns NaN if conversion fails.
const numberOfOccurrences = parseInt(firstArg);

// Check if the parsed number is NaN (Not-a-Number).
// If it's NaN, it means the argument couldn't be converted to a valid integer.
if (isNaN(numberOfOccurrences)) {
  // First console.log call: Print the error message.
  console.log("Missing number of occurrences");
} else {
  // If the number is valid, proceed to print "C is fun" using a loop.
  // The loop only runs if numberOfOccurrences is a positive integer.
  // If numberOfOccurrences is 0 or negative, the loop will not execute,
  // and nothing will be printed, matching the example output for -3.
  let outputString = ""; // Using 'let' as its value will be modified in the loop.

  for (let i = 0; i < numberOfOccurrences; i++) {
    outputString += "C is fun\n";
  }

  // Second console.log call: Print the accumulated string.
  // trimEnd() removes any trailing newline characters to match the exact output format.
  console.log(outputString.trimEnd());
}
