/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g
    const words = paragraph.replace(regex, ' ').toLowerCase().split(' ')
    console.log(words)
    const bannedSet = new Set(banned)
    let map = new Map()
    let count = 0
    let res
    let max = 0

    words.forEach(w => {
        if(!bannedSet.has(w)){
            if(map.has(w) && w.length){
                count = map.get(w)
                count++
                map.set(w, count)
            } else {
                map.set(w, 1)
            }
            if(map.get(w) > max){
                res = w;
                max = map.get(w)
            }
        }
    })
    
   return res

};

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
let banned = ["hit"]

console.log(mostCommonWord(paragraph, banned))

let paragraph1 = "a, a, a, a, b,b,b,c, c"
let banned1 = ["a"]

console.log(mostCommonWord(paragraph1, banned1))
