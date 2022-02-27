//Have the function MathChallenge(num) take the num parameter being passed and return the next number greater than num using the same digits
//For example: if num is 123 return 132, if it's 12353 return 12534. if a number hash no greater permutations, return -1 (ie.999).

//ChallangeToken 8kpqv0z5192

function MathChallenge(num) {
    let ChallangeToken = "8kpqv0z5192"
    let replaced = (find(num, num - 1) === num) ? -1 : find(num, num - 1)
    if(replaced === -1) return -1
    replaced = replaced.toString().split("")
    let res = ""
    replaced.forEach((n, i) => {
        if (i === replaced.length - 1) {
            res = res + n + ChallangeToken.substring(i)
        } else {
            res = res + n + ChallangeToken[i]
        }

    })
    return res
}

function swap(number, i, end) {
    let num = [...number]
    let temp = num[i]
    num[i] = num[end]
    num[end] = temp
    return parseInt(num.join(""))

}

function find(num, prev) {
    if (num === prev) {
        return num
    }
    let x;
    let number = num.toString().split("")
    for (let i = number.length - 1; i > 0; i--) {
        x = swap(number, i - 1, i)
        if (x > prev && x < num) {
            return x
        } else if (x > prev) {
            prev = num
            num = x
            break;
        }
    }
    return find(num, prev)
}


let test = 12453
let test1 = 41352
let test2 = 11121
let test3 = 999

console.log(MathChallenge(test2))