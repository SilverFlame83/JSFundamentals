function solve(arr) {
    let lineOfInt = arr.shift().split(' ').map(Number);
    
    let command = arr.shift();    
    while(command !== 'end'){
        let tokens = command.split(' ');
        if(tokens[0] === 'swap'){
            
            let ind1 = Number(tokens[1]);
            let ind2 = Number(tokens[2]);
            let temp = lineOfInt[ind1];
            lineOfInt[ind1] = lineOfInt[ind2];
            lineOfInt[ind2] = temp;
        
        }else if(tokens[0] === 'multiply'){
            
            let ind1 = Number(tokens[1]);
            let ind2 = Number(tokens[2]);
            lineOfInt[ind1] *= lineOfInt[ind2];
        
        }else if(tokens[0] === 'decrease'){
            lineOfInt = lineOfInt.map(x => x-1);
        }
        command = arr.shift();
    }
    console.log(lineOfInt.join(', '));
}

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);