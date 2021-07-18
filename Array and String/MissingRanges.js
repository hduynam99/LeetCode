/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
 var findMissingRanges = function(nums, lower, upper) {
    
    let result = []
    let previous = (lower - 1)
    for(let i = 0; i <= nums.length; i++){
        let current = (i < nums.length) ? nums[i] : (upper+1);
        if((previous + 1) <= (current - 1) ){
            result.push(helper((previous+1), (current -1)))
        }
        previous = current
    }

    return result
    
};

var helper = function(lower, upper){
    if(lower == upper){
        return lower
    }
    return lower + "->" + upper
}

let nums = [0,1,3,50,75]
let lower = 0
let upper = 99

console.log(findMissingRanges(nums,lower,upper))