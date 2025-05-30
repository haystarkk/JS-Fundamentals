const numberOfArguments = process.argv.length - 2;

// Check the number of arguments and print the corresponding message.
if (numberOfArguments === 0) {
  console.log("No argument");
} else if (numberOfArguments === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
