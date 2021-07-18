/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    let sumIndex = []
    let hash = new Map();

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if(hash.has(complement)){
            return [hash.get(complement), i]
        }
        hash.set(nums[i], i)

    }
    return "not exits"
};

let nums = [3,2,4]
let target = 6

console.log(twoSum(nums,target))