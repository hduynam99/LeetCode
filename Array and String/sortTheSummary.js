
function sortTheSummary(arr) {

    let res = []
    let hash = {}
    arr.forEach(e => {
        
        hash[e]? hash[e].push(e) : hash[e] = [e]
    });

    let keys = Object.keys(hash)
    keys.forEach(k => {
       res.push([parseInt(k),hash[k].length])
    })

    res = res.sort((a,b) => {
        if(a[1] === b[1]){
            return a[1]-b[1]
        } else {
            return b[1]-a[1]
        }
    })

    console.log(res)
}


let arr1 = [3,3,1,2,1]
let arr = [20,1,20,20]
let arr2 = [70,70,20,30,30,50,40,20,20,50,40,30,50,60,60,80,10,70]

console.log(sortTheSummary(arr))
console.log(sortTheSummary(arr1))
console.log(sortTheSummary(arr2))