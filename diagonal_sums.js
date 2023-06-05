matrix1 = [[1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1]]
matrix2 = [[1,2,3],
        [4,5,6],
        [7,8,9]]
matrix3 = [[2]]

function diagonalSum(matrix) {
    const DIAGONAL_SUM = 0

    var primaryDiagonal = 0
    var secondaryDiagonal = 0
    const matrixLength = matrix.length
    for(let rowIndx = 0; rowIndx < matrixLength; rowIndx++){
        primaryDiagonal += matrix[rowIndx][rowIndx]
        secondaryDiagonal += matrix[rowIndx][matrixLength -1 -rowIndx]
    }
    // if the dimention of the matrix is odd, find the mid elem and subtract it from the sum since when it's odd, the mid point elem is counted twice
    if(matrixLength % 2 === 1){
        const midIndex = math.floor(matrixLength/2)
        secondaryDiagonal -= matrix[midIndex][midIndex]
    }
    DIAGONAL_SUM = primaryDiagonal + secondaryDiagonal
    return DIAGONAL_SUM
}