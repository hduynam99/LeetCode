// Have the function ArrayChallenge(strArr) take strArr which will be an array consisting of the following elemints:
// N which will be the number of gas station in a circular route and each subsequent element will be the string g:c where
// g is the amount of gas in gallons at that gas station and c will be the amount of gallons of gas needed to get to the following gas station.

//For example strArr maybe : 
// ["4","3:1","2:2","1:2", "0:1"]
// Your goal is to return the index of the starting gas station that will allow you to travel around the whole route once,
// otherwise return the string impossile. For the example above, there are 4 gas stations, and your program should return the string 1 
// because starting at station 1 you receive 3 gallons of gas and spend 1 getting to the next station. Then you have 
// 2 gallons _ 2 more at the next station and you spend 2 so you have 2 gallons when you get to the 3rd station.
// You then have 3 but you spend 2 getting to the final station, 
// and at the final station you receive 0 gallons and you spend your final gallon getting to your starting point.
// Starting at any other gas station would make getting around the route impossible, so the answer is 1.
// if there are multiple gas stations that are possible to start at, return the smalles index (of the gas station) N will be >= 2


function ArrayChallenge(strArr) {
    let hash = {}
    let n = strArr.shift()
    let gas = 0
    let road = 0
    strArr.forEach((s, i) => {
        hash[s] = (i + 1).toString()
    })

    strArr.sort((a, b) => {
        let x = a.split(':').map(Number)
        let y = b.split(':').map(Number)
        if (x[0] === y[0]) {
            return y[1] - x[1]
        } else {
            return y[0] - x[0]
        }
    })

    for (let i = 0; i < n; i++) {
        let x = strArr[i].split(":").map(Number)
        gas += x[0]
        road += x[1]
    }

    if (gas < road) {
        return "impossible"
    } else {
        return hash[strArr[0]]
    }


}

let test = ["4", "1:1", "2:2", "1:2", "0:1"] // impossible
let test1 = ["4", "0:1", "2:2", "1:2", "3:1"] // 4
let test2 = ["4", "3:1", "2:2", "1:2", "0:1"] //1

console.log(ArrayChallenge(test2))