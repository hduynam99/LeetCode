/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    
    if(s === null || s.length < 1) return "";

    let start = 0
    let end = 0

    for(let i = 0; i < s.length; i ++){
        let len1 = helper(s, i ,i)
        let len2 = helper(s, i ,i+1)
        let maxLen = Math.max(len1,len2)

        if(maxLen > end - start){
            start = i- Math.floor((maxLen-1)/2)
            end = Math.floor(i + (maxLen/2))
        }

    }

    console.log(start)
    console.log(end)
    console.log(s.length)




    return s.slice(start,end+1)




};

var helper = function(s, l, r){
    let left = l
    let right = r
    if(s === null || left> right){
        return 0
    }

    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--
        right++
    }

    return right - left - 1
}

str = "babad";

str2 = "cbbd";

str3 = "a";

str4 = "ac";

console.log(longestPalindrome(str));
console.log(lengthOfLongestSubstring(str2));
console.log(lengthOfLongestSubstring(str3));
console.log(lengthOfLongestSubstring(str4));