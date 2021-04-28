function solve(input) {
    let sequence = input.shift().split(' ').map(Number);
    let command = input.shift();
    let count = 0;

    while (command !== 'End') {
        command = Number(command);
        let length = sequence.length-1;
        if ( command <= length && command >= 0) {
            if (sequence[command] !== -1) {
                count ++;
                let num = sequence[command];
                sequence.splice(command, 1, -1);
                for (let i = 0; i < sequence.length; i++) {
                    if (sequence[i] !== -1 && sequence[i] > num) {
                        sequence[i] -= num;
                    } else if (sequence[i] !== -1 && sequence[i] <= num) {
                        sequence[i] += num;
                    }
                }

            }
        }
        command = input.shift();
    }
    console.log(`Shot targets: ${count} -> ${sequence.join(' ')}`)
}

solve([ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ])