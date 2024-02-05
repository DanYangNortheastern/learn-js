// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];
  
  const newMatrix1 = originalMatrix.map((row) => {
    let rowCopy = Array.from(row)
    return rowCopy.sort();
  });

  const newMatrix2 = originalMatrix.map((row) => {
    return [...row].sort();
  });

  // Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99;
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix1 (unaffected):', newMatrix1);
  console.log('New Matrix2 (unaffected):', newMatrix2);
  