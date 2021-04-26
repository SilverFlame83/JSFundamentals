function gladiator(arr) {
   
    let inventory = arr[0];
    inventory = inventory.split(' ');
    let arrCommands = arr.slice(' ');
    for (let i = 1; i < arrCommands.length; i++) {
        
        let currentCommand = arrCommands[i].split(' ');
        let commands = currentCommand[0];
        let element = currentCommand[1];

        if (commands === 'Buy') {

            if (inventory.includes(element) === false) {
                inventory.push(element);

            }
        } else if (commands === 'Trash') {
            if (inventory.includes(element) === true) {
                
                let index = inventory.indexOf(element);
                inventory.splice(index, 1);

            }
        } else if (commands === 'Repair') {

            if (inventory.includes(element) === true) {
                inventory = inventory.slice(' ');
                let index = inventory.indexOf(element);
                inventory.splice(index, 1);
                inventory.push(element);
            }
        } else if (commands === 'Upgrade') {
            let firstEl = element.split('-');
            let el = firstEl[0];
            let second = firstEl[1]
            if (inventory.includes(el) === true) {
                
                let i = inventory.indexOf(el);
                inventory.splice((i+1),0,(`${el}:${second}`));

            }
        }
    }
    console.log(inventory.join(' '));
}

gladiator(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']

)