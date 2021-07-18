/**
* @param {string} str
* @return {number}
*/
var myAtoi = function (str) {
    var len = str.length;
    var INT_MAX = 2147483647;
    var INT_MIN = - INT_MAX - 1;
    let index = 0;
    let sign = 1;
    let res = 0;

    // if(!str.length){
    //     return 0;
    // }
    
    // while(str[index] === " ") index++;


    // if(str[index] === "-" ){
    //     sign = -1;
    //     index++;
    // } else if (str[index] === "+"){
    //     index++;
    // }

    // let start = index

    // while(str[index] >= "0" && str[index] <= "9" ) index ++;

    // res = parseInt(str.slice(start,index))*sign

    // if(!res){
    //     return 0
    // }

    // if(res > INT_MAX){
    //     return INT_MAX
    // } else if (res < INT_MIN){
    //     return INT_MIN
    // }

    // return res



};


let s1 = "42";

let s2 = "  --42"

let s3 = "-4193 with words"

let s4 = "words and 987"

let s5 = "-91283472332"

let s6 = "3.69"

console.log(myAtoi(s1))
console.log(myAtoi(s2))
console.log(myAtoi(s3))
console.log(myAtoi(s4))
console.log(myAtoi(s5))
console.log(myAtoi(s6))