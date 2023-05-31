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

console.log(createBlankMatrix(inputMatrix2))

