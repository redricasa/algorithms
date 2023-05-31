function generatePascalsTriangle(numRows) {
    // Create an empty two-dimensional array to store the triangle
    var triangle = [];
  
    // Iterate over the rows of the triangle
    for (var row = 0; row < numRows; row++) {
      // Create an array to store the numbers in the current row
      var currentRow = [];
  
      // Iterate over the columns of the triangle
      for (var col = 0; col <= row; col++) {
        // If it's the first or last column, set the value to 1
        if (col === 0 || col === row) {
          currentRow.push(1);
        } else {
          // Otherwise, calculate the value by adding the two numbers above it
          var aboveLeft = triangle[row - 1][col - 1];
          var aboveRight = triangle[row - 1][col];
          currentRow.push(aboveLeft + aboveRight);
        }
      }
  
      // Add the current row to the triangle
      triangle.push(currentRow);
    }
  
    // Return the generated Pascal's triangle
    return triangle;
  }
  
  