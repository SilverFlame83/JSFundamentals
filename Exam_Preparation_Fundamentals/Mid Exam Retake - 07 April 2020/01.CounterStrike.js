function solve(input) {
    let energy = Number(input.shift());

    let win = 0;

    for (let command of input) {
        if (command !== 'End of battle') {
            let distance = Number(command);
            if (energy - distance < 0) {
                console.log(`Not enough energy! Game ends with ${win} won battles and ${energy} energy`)
                return;
            }
            energy -= distance;
            win++;
        } else {
            console.log(`Won battles: ${win}. Energy left: ${energy}`)
        }
        if (win % 3 === 0) {
            energy += win;
        }
    }

}



solve([
    '100', '10', '10',
    '10', '1', '2',
    '3', '77', '10'
]);