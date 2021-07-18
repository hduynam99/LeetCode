/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let i, j;
    var rowNums = matrix.length;
    var colNums = matrix[0].length;
    var result = matrix
    var flag = false;
    for (i = 0; i < rowNums; i++) {

        //set flag
        if (matrix[i][0] === 0) {
            flag = true;
        }

        for (j = 1; j < colNums; j++) {

            //find 0 location by [i,j]
            // set 0 to the first element of corresponding columns and rows
            if (matrix[i][j] === 0) {
                result[0][j] = 0;
                result[i][0] = 0;
            }
        }
    }

    //loop one more time to set 0
    for (i = 1; i < rowNums; i++) {
        for (j = 1; j < colNums; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                result[i][j] = 0;
            }

        }
    }

    //first row is 0
    if (matrix[0][0] === 0) {
        for (j = 0; j < colNums; j++) {
                result[0][j] = 0;
        }
    }

    //
    if (flag) {
        for (i = 0; i < rowNums; i++) {
            result[i][0] = 0;
        }
    }

    return result;

}

let matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

let matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

let matrix3 = [[1], [0]];


// console.log(setZeroes(matrix1));
// console.log(setZeroes(matrix2));
console.log(setZeroes(matrix3));
