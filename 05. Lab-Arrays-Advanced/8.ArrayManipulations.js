function arrayManipulation(commands) {
    let arr = commands
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        if (command === "Add") {

            arr.push(firstNum);

        } else if (command === "Remove") {
            let filtered = arr.filter(num => num !== firstNum);
            arr = filtered;

        } else if (command === "RemoveAt") {

            arr.splice(firstNum,firstNum)

        } else if (command === "Insert") {

            arr.splice(secondNum, 0, firstNum)
        }
    }
    console.log(arr.join(' '));
    
}

arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);