const firstArgument = process.argv[2];

// Check if the first argument exists and print it, otherwise print "No argument".
if (firstArgument === undefined) {
  console.log("No argument");
} else {
  console.log(firstArgument);
}
