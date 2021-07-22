process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = '';
// stored parse input
var stored =[];
//valid commands
let cmnds = new Set(["add", "delete", "get"])

process.stdin.on("data", function (chunk) {
    input += chunk
});
process.stdin.on("end", function () {
    input.split(/\n/).forEach(s => {
        let cm  =  s.split(' ')[0];
        let sub = cm.length;
        
        // check if commands valid
        if(cmnds.has(cm)){
            // store command 
            if(cm === 'add'){
                let add = JSON.parse(s.slice(sub,s.length));
                stored.push(add);
            } 
            // get command
            if (cm === 'get') {
                let get = JSON.parse(s.slice(sub,s.length));
                stored.forEach(doc => {
                    let c = check(get, doc)
                    if(c){
                        console.log(JSON.stringify(doc))
                    }
                })
            }
            // delete command
            if (cm === 'delete'){
                let del = JSON.parse(s.slice(sub,s.length));
                let arr = [];
                stored.forEach((doc,i) => {
                    let c = check(del, doc)
                    if(c){
                        arr.push(doc)
                    }
                })
                stored = stored.filter(item => !arr.includes(item))
            }
        }
    })
});


/* Return true if it is the match */
let check = (cmd, obj) => ( Object.keys(cmd).every(g => {
    if (typeof obj[g] !== 'object') {
        return obj[g] === cmd[g]
    } else if (Array.isArray(obj[g])) {
        return cmd[g].every(r => obj[g].includes(r))
    } else {
        return check(cmd[g], obj[g])
    }
}))

