/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    
    let res = 0;

    for(let i = 0; i < nums.length + 1; i++){
        if(!nums.includes(i)){
            res = i
        }
    }

    return res

};

let nums = [9,6,4,2,3,5,7,0,1]

console.log(missingNumber(nums))