function solve(input) {
    let sequence = input.shift().split(' ').map(Number);
    let [command, index, manipulator] = input.shift().split(' ');

    while (command !== 'End') {
        index = Number(index);
        manipulator = Number(manipulator);

        if (command === 'Shoot') {

            if (index <= sequence.length) {
                sequence[index] -= manipulator;
                if (sequence[index] <= 0) {
                    sequence.splice(index, 1);
                }
            }

        } else if (command === 'Add') {

            if (index >= 0 && index <= sequence.length) {
                sequence.splice(index, 0, manipulator);
            } else {
                console.log('Invalid placement!');
            }

        } else if (command === 'Strike') {
            if (index >= 0 && index <= sequence.length
                && index + manipulator >= 0
                && index + manipulator <= sequence.length
                && index - manipulator >= 0
                && index - manipulator <= sequence.length) {
                sequence.splice(index, 1);
                sequence.splice((index -1) + manipulator, 1);
                sequence.splice(index - manipulator, 1);
            } else {
                console.log('Strike missed!');
                
            }
        }
        [command, index, manipulator] = input.shift().split(' ');
    }
    console.log(sequence.join('|'));
}

solve([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
  ])
