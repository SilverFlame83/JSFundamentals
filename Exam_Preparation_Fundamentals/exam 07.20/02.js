function solve(input) {
    let weaponParts = input.shift().split('|');
    let [firstCommand, secondComand, index] = input.shift().split(' ');

    while (firstCommand !== 'Done') {
        if (firstCommand === 'Move' && secondComand === 'Left') {
            if (index >= 0 && index <= weaponParts) {
                index = Number(index);
                if (index - 1 >= 0 || index - 1 <= weaponParts) {
                    let el = weaponParts[index];
                    weaponParts.splice(index, 1);
                    weaponParts.splice(index - 1, 0, el);

                }
            }

        } else if (firstCommand === 'Move' && secondComand === 'Right') {
            index = Number(index);
            if (index + 1 >= 0 || index + 1 <= weaponParts) {
                let el = weaponParts[index];
                weaponParts.splice(index, 1);
                weaponParts.splice(index + 1, 0, el);

            }
        } else if (firstCommand === 'Check' && secondComand === 'Even') {

            let even = [];
            for (let i = 0; i < weaponParts.length; i++) {

                let current = weaponParts[i];
                if (i % 2 === 0) {

                    even.push(current);
                }
            }
            console.log(even.join(' '));
        } else if (firstCommand === 'Check' && secondComand === 'Odd') {
            let odd = [];
            for (let i = 0; i < weaponParts.length; i++) {

                let current = weaponParts[i];
                if (i % 2 !== 0) {

                    odd.push(current);
                }
            }
            console.log(odd.join(' '));
        }
        [firstCommand, secondComand, index] = input.shift().split(' ');
    }
    console.log(`You crafted ${weaponParts.join('')}!`)
}

solve([
    'Ve|or|nd|st|ke|ri',
    'Check Even',
    'Move Right 5',
    'Move Left 2',
    'Move Left 0',
    'Move Right 4',
    'Done'
  ])