var inputMatrix1 =  [[0,0,0], 
                    [0,1,0], 
                    [1,1,1]]

var inputMatrix2 =  [[0,0,0], 
                    [0,1,0], 
                    [0,0,1],
                    [0,1,0]]
var theatre = []


function createBlankMatrix(matrix){
    var result = []
    
    const ROW_COUNT = matrix.length
    const COL_COUNT = matrix[0].length //# of elems in a row
    // loop to create a matrix with just 0's and push to result
    for(let rowIndex = 0 ; rowIndex < ROW_COUNT ; rowIndex++ ) {
        var row = []
        for(let colIndex = 0 ; colIndex < COL_COUNT ; colIndex++) {
            row.push(0)
        }
        result.push(row)
    }

    return result
}

// console.log(createBlankMatrix(inputMatrix2))

// function that takes in a 2D array of 0s and 1s and tansposes - [takes the nth index of rows and puts then in a row of their own - 1st index of multiple rows --> elements of 1st row] them

function transpose(matrix){
    // initialize array to return
    const transposedMatrix = []
    const rows = matrix.length
    const cols = matrix[0].length
    // TODO: if stmt for edge cases of == empty matrix or == matrix with just one elem in array or == only one array
    if(){}
    // a loop to push empty arrays to hold rows
    for(let i = 0; i < cols; i++){
        transposedMatrix.push([])
    }
    // nested loop to assign transposedMatrix[col][row] with matrix[row][col]
    for(let rowIndx = 0; rowIndx < rows; rowIndx++ ){
        for(let colIndx = 0; colIndx < cols; colIndx++){
            transposedMatrix[colIndx][rowIndx] = matrix[rowIndx][colIndx]
        }
    }
    return transposedMatrix
}

console.log(transpose(inputMatrix2))
