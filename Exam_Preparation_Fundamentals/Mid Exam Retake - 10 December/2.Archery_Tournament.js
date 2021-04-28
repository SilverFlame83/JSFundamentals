function solve(input) {
    let field = input.shift().split('|').map(Number);
    let [command, index, length] = input.shift().split('@');
    let points = 0;

    while (command !== 'Game over') {
        let indexToHit = Number(index);
        index = Number(index);
        length = Number(length);
    if (command === 'Reverse') {
        field = field.reverse();
    }
        if (index >= 0 && index < field.length) {
            if (command === 'Shoot Left') {
                while (length !== 0) {
                    length--;
                    if (indexToHit-- <= 0) {
                        indexToHit = field.length - 1;

                    }
                }
                if (field[indexToHit] >= 5) {
                    field[indexToHit] -= 5;
                    points += 5;
                } else {
                    points += field[indexToHit];
                    field[indexToHit] = 0;
                }
            } else if (command === 'Shoot Right') {
                while (length !== 0) {
                    length--;
                    if (indexToHit++ >= field.length - 1) {
                        indexToHit = 0;

                    }
                }
                if (field[indexToHit] >= 5) {
                    field[indexToHit] -= 5;
                    points += 5;
                } else {
                    points += field[indexToHit];
                    field[indexToHit] = 0;
                }
            }
        }

        [command, index, length] = input.shift().split('@');
    }
    console.log(field.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`)
}

solve([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
  ])