/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let hash = {};

    strs.forEach(str => {
        let key = str.split('').sort();

        hash[key] ? hash[key].push(str) : hash[key] = [str]
    })

    const value = Object.keys(hash).map(function(v){
        return hash[v];
    })

    return value;
    

};


let strs = ["eat","tea","tan","ate","nat","bat"]

let strs2 = [""]

let strs3 = ["a"]

console.log(groupAnagrams(strs));
console.log(groupAnagrams(strs2));
console.log(groupAnagrams(strs3));

// console.log(strs3.length)