function party(arr) {
    let guestList = [];
    let commands = arr.slice(' ');
    for (let i = 0; i < commands.length; i++) {
        let arrCommand = commands[i].split(' ');
        let guest = arrCommand[0];
        let command = arrCommand[2];
        if (command !== 'not') {
            if (guestList.includes(guest) === true) {
                console.log(`${guest} is already in the list!`);
                continue;
            } guestList.push(guest);
        } else {
            if (guestList.includes(guest) === false) {
                console.log(`${guest} is not in the list!`);
                continue;
            }
            guestList = guestList.filter(name => name !== guest)
        }
    }
    console.log(guestList.join('\n'));

}



party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

);