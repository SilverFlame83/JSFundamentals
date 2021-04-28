function solve(arr) {
    let inventory = arr.shift().split(', ');

    while (arr.length > 0) {
        let collecingItem = arr.shift().split(' - ');
        let command = collecingItem[0];
        let item = collecingItem[1];

        if (command === 'Collect') {

            if (inventory.includes(item)) {
                continue;
            } else {
                inventory.push(item);
            }

        } else if (command === 'Drop') {

            if (inventory.includes(item)) {
                let indexOfItem = inventory.indexOf(item);
                inventory.splice(indexOfItem, 1);
            }

        } else if (command === 'Combine Items') {

            let [oldItem, newItem] = item.split(':');

            if (inventory.includes(oldItem)) {
                let indexOfItem = inventory.indexOf(oldItem);
                inventory.splice(indexOfItem + 1, 0, newItem);
            }

        } else if (command === 'Renew') {
            if (inventory.includes(item)){
                let indexOfItem = inventory.indexOf(item);
                let change = inventory.splice(indexOfItem, 1);
                inventory.push(change);

            }
        } else if (command === 'Craft!') {
            console.log(inventory.join(', '))
            break;
        }

    }
}

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  
)