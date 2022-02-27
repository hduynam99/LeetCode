//Have the function StringChallenge(str) take the str parameter being passed and determine 
//if a palindrome can be created by swapping two adjacent character in the string.
//If it is possible to ceate a palindrome, then your program should return the palindrome, 
//if not then return the string -1. The input string will only contain alphabetic characters.
//For example: If str is "rcaecar" then you can create a palindrome by swapping the second and third charaters,
//so your program should return the string racecae which is the final palindromic string

//Once your function is working take the final output string and intersperse it character by character with your challengeToken
//Your ChallangeToken: 8kpqv0z5192

let test = "kyaak"
let test1= "anna"

function StringChallenge(str) {
    let ChallangeToken = "8kpqv0z5192"
    let replaced = str.replace(/[^a-z 0-9] /gi, "").toLowerCase().replace(/ /g, "").split('')
    let res = ""
    for (let i = 0, j = replaced.length - 1; i < j; i++, j--) {
        if (replaced[i] !== replaced[j]) {
            let low = i
            let high = j - 1
            while (low < high) {
                let copy = replaced.slice()
                copy[low] = replaced[high]
                copy[high] = replaced[low]

                if(copy[i] === copy[j]){
                    replaced = copy
                    break;
                }
                high--
            }
            if(replaced[i] === replaced[j]){
                break;
            } else {
                return false
            }
        }
    }


    replaced.forEach((n,i) => {
        if(i === replaced.length-1){
            res = res + n+ ChallangeToken.substring(i)
        } else {
            res = res + n + ChallangeToken[i]
        }
        
    })

    return res
}

console.log(StringChallenge(test1))