/** 
 * @param {number[][]} mat
 *  @return {number}
*/
let diagonalSum = function(mat) {
    //get the side length
    let nums = mat.length 

    //get the mid pt using Math.floor
    let mid = Math.floor(nums / 2)

    //summation of the diagonal element
    summation = 0

    for(let i=0; i<nums; i++){
        //get the primary diagonal
        summation += mat[i][i]

        //get the secondary diagonal 
        summation += mat[nums-1-i][i]
    }

    if(nums % 2 ==1){
        //remove the mid element
        summation -= mat[mid][mid]
    }

    return summation
};