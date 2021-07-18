/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {

    logs = logs.map(v => v.split(' ').filter(Boolean))

    let letter = logs.filter(v => v[1].match(/^[a-z\s]+$/))
    let digit = logs.filter(v => v[1].match(/[\d\s]+$/))

    letter.sort((a,b) => (c = a[1].localeCompare(b[1])) ? c : a[0].localeCompare(b[0]))

    let result = letter.concat(digit)
    result = result.map(a => a.join(' '))
    return result;
    


};

let logs1 = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

console.log(reorderLogFiles(logs1))
