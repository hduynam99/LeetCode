/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    
    horizontalCuts.unshift(0)
    horizontalCuts.push(h)
    horizontalCuts.sort((a,b) => a - b)
    
    verticalCuts.unshift(0)
    verticalCuts.push(w)
    verticalCuts.sort((a,b) => a - b)

    let res = BigInt(maxValue(verticalCuts)) * BigInt(maxValue(horizontalCuts))
    return (res  % (1000000007n))
};

var maxValue = function(arr) {
    let res = 0;
    for(let i = 1; i < arr.length; i++){
        res = Math.max(res, arr[i] - arr[i-1])
    }
    return res
}