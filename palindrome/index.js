// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* ------ SOLUTION 1 ------ */

function palindrome(str) {
  /* 1. Take the string being passed through use the split, reverse and join methods 
     2. Check to see if that reversed string is the same as the string being passed through originally
  */
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

module.exports = palindrome;
