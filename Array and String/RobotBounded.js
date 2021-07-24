function isRobotBounded(instruction){
    let dir = 0; 
    let directions = [[1,0],[0,1],[-1,0],[0,-1]]
    let x = 0,y = 0
    instruction.split('').forEach(e => {
        if(e === 'G'){
            x += directions[dir][0]
            y += directions[dir][1]
        } else if(e === 'L'){
            dir = (dir===0)? 3: dir-1
        } else if(e === 'R'){
            dir = (dir+1)%4
        }
    });

    if(x === 0 && y === 0) return true;
    if(dir === 0) return false;
    return true
}

let ins = "GL"

console.log(isRobotBounded(ins))