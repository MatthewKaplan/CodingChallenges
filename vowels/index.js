// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/*------ SOLUTION 1 -------- */

function vowels(str) {
  let count = 0;
  const vowelCheck = 'aeiou';

  for (let char of str.toLowerCase()) {
    if (vowelCheck.includes(char)) {
      count++
    }
  }
  return count;
}

vowels("Hi There!"); 
module.exports = vowels;
