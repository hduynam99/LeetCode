function performOperations(arr, operations) {
    // Write your code here
    let res = arr.slice()
    
    operations.forEach(n => {
        let a = n[0]
        let b = n[1]
        console.log("a:" + a + ",b:" + b)
        for(j = a, k = b; j < k; j++, k --){
            console.log("j:" + j + ",k:" + k)
            let temp = res[j];
            console.log("temp:" + temp)
            res[j] = res[k];
            res[k] = temp
        }

    })


    return res

}

// let arr = [5,3,2,1,3]
// let operations = [[0,1],[1,3]]
let operations = [[0,9],[2,2],[5,5],[1,6],[5,6],[5,9],[0,8],[6,7],[1,9],[3,3]]
let arr = [640,26,276,224,737,677,893,87,422,30]

console.log(performOperations(arr, operations))




//correct
// 87
// 422
// 30
// 737
// 224
// 677
// 893
// 640
// 26
// 276

//wong
// 422
// 26
// 276
// 224
// 737
// 640
// 87
// 677
// 30
// 893