// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* ------- SOLUTION 1 -------- */

function reverse(str) {
  /* 1. Turn 'str' into an array
     2. Call 'reverse' method on the array 
     3. Join the array back into a string
     4. Return the result    
  */
  return str.split('').reverse().join('')
}

/* ------- SOLUTION 2 -------- */

function reverse(str) {
    /* 1. Create an empty string called 'reverse'
       2. for each character in the provided string, take the character and add it to the start of 'reversed'
       3. Return the variable 'reversed'
    */
    let reversed = '';

    for (let character of str) {
      reversed = character + reversed;
    }
    return reversed;
}

/* ------- SOLUTION 3 -------- */

function reverse(str) {
    /* 1. Turn 'str' into an array
       2. Use the reduce helper
    */

    return str.split('').reduce((reversed, character) => character + reversed,'');
}

module.exports = reverse;


// Runtime Complexity = n or 'linear' runtime
// Eacg additional character = 1 step through 1 loop