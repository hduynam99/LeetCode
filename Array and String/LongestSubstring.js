/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let hash = {}
    let start = 0
    let char = s.split('')
    let longest = 0;
    
    for(let i =0; i < char.length; i++){

        if(hash[char[i]] >= start){
            start = hash[char[i]] + 1

        }
        hash[[char[i]]] = i

        longest = Math.max(longest, i - start + 1)

    }

    return longest
   
};

str = "abcabcbb";

str2 = "bbbbb";

str3 = "pwwkewpabcd";

str4 = "";

console.log(lengthOfLongestSubstring(str));
console.log(lengthOfLongestSubstring(str2));
console.log(lengthOfLongestSubstring(str3));
console.log(lengthOfLongestSubstring(str4));