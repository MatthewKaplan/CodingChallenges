// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/* STEPS:
  1. Create empty array of arrays called 'results'
  2. Create a counter variable, starting at 1
  3. As long as (start column <= end column) and (start row <= end row)
    4. Loop from start column to end column 
      5. As results[start_row][i] assign counter variable
      6. Increment counter
    7. Increment start row
    8. Loop from start row to end row
      9. At results[i][end_column] assign counter variable
      10. increment counter
    11. Decrement end row
    12. ...Repeat for other two sides */

function matrix(n) {
  const results = [];
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right Column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Left Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  console.log(results)
  return results;
}

matrix(3)

module.exports = matrix;
