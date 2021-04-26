function manipulator(arrOfInt, arrOfCommands) {
    let commands = [];

    while (commands !== 'print') {
        commands = arrOfCommands.shift();
        let firstCommand = commands.split(' ');

        // let index = commands
        switch (firstCommand[0]) {
            case 'add':
                arrOfInt.splice(Number(firstCommand[1]), 0, Number(firstCommand[2]));
                break;

            case 'addMany':
                let index = firstCommand[1];
                for (let i = 2; i < firstCommand.length; i++) {
                    let value = Number(firstCommand[i]);
                    arrOfInt.splice(index++, 0, value);
                }
                break;
            case 'contains':
                let element = Number(firstCommand[1]);
                console.log(arrOfInt.indexOf(element));

                break;
            case 'remove':
                let i = Number(firstCommand[1]);
                arrOfInt.splice(i, 1)
                break;
            case 'shift':
                let position = Number(firstCommand[1]);
                for (let i = 0; i < position; i++) {
                    let shifted = arrOfInt.shift();
                    arrOfInt.push(shifted);
                }
                break;
            case 'sumPairs':
                let result = [];
                while (arrOfInt.length > 0) {
                    let a = arrOfInt.shift() || 0;
                    let b = arrOfInt.shift() || 0;
                    result.push(a + b);
                }
                arrOfInt = result;
                break;
        }
    }
    console.log(`[ ${arrOfInt.join(', ')} ]`);
    
}

manipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )