// Create an array of strings with the desired messages.
// Using 'const' as 'var' is not allowed.
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Join the array elements into a single string, separated by newline characters.
// This allows us to use only one console.log call.
const outputString = messages.join('\n');

// Print the combined string to the console.
// No if/else statements are used.
// Only one console.log call is used.
console.log(outputString);
