function train(commands) {
    let wagons = commands
        .shift()
        .split(' ')
        .map(Number);
    let maxCapacity = commands.shift();
    maxCapacity = Number(maxCapacity);
    let result = [];
     
    for (let i = 0; i < commands.length; i++) {
        let [command, passangers] = commands[i].split(' ');
        passangers = Number(passangers);
        if(command === 'Add'){
            wagons.push(passangers);
        }else{
            for(let j = 0; j < wagons.length; j++){
                command = Number(command);
                if(wagons[j] + command <= maxCapacity){
                    wagons[j] += command;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
    
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

)