let nums = [-1,0,1,2,-1,-4]

let nums1 = [0,0,0]

let nums2 = [-1,0,1,2,-1,-4,-2,-3,3,0,4]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = [];
    let array = nums.sort((a,b)=> a-b);
    for(let i = 0; i < (array.length) && (array[i] <= 0) ; i++ ){
        if(i === 0 || (array[i] !== array[i-1])){
            helper(array, i, result)
        }
    }
    return result;
};

var helper = function(arr, i, res) {
    let low = i + 1;
    let high = arr.length - 1;
    while(low < high){
        let sum = arr[i]+arr[low]+arr[high];
        if(sum <0){
            low++;
        } else if(sum >0){
            high--;
        } else {
            let final = [arr[i],arr[low++],arr[high--]];
            res.push(final);
            while(low < high && arr[low] === arr[low-1]){
                low++;
            }
        }
    }
}

console.log(threeSum(nums))

console.log(threeSum(nums1))

console.log(threeSum(nums2))


