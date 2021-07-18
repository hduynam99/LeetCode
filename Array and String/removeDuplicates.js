/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    
    let start = 0;
    
    for(let i = 1; i < nums.length; i ++){
        if(nums[start] != nums[i]){
            start++;
            nums[start] = nums[i]
        }
    }

    return start + 1

};


let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums))