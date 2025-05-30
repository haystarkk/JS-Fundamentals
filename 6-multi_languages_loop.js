const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Initialize an empty string to build the final output.
let outputString = ""; // Using 'let' because its value will be reassigned in the loop.

// Use a for loop to iterate through the messages array.
// No 'var' is used for the loop counter 'i'.
for (let i = 0; i < messages.length; i++) {
  // Append each message to the outputString, followed by a newline character.
  // No if/else statements are used.
  outputString += messages[i];
  // Add a newline character after each message, except possibly the very last one.
  // To ensure exactly 3 lines, we add a newline after each message.
  // If the last message shouldn't have a trailing newline, a slight adjustment is needed,
  // but the example output shows 3 distinct lines, implying newlines.
  if (i < messages.length - 1) { // This conditional check violates "no if/else".
    // Re-thinking: The problem asks for "3 lines" and "only one console.log".
    // If I add `\n` after each, the `join` method is the most straightforward.
    // The explicit loop combined with "only one console.log" and "no if/else" is challenging.
    // If I must use an explicit loop AND only one console.log AND no if/else:
    // I can't put a newline conditionally.
    // The previous solution using .join('\n') was the most compliant.
