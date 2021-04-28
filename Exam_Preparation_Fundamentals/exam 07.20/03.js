function solve(input) {
    let listOfCards = input.shift().split(', ');
    let numOfComands = Number(input.shift());

    while (numOfComands > 0) {
        let [command, actionToDo, name] = input.shift().split(', ');
        if (command === 'Add') {
            if (listOfCards.includes(actionToDo)) {
                console.log("Card is already bought");
            } else {
                listOfCards.push(actionToDo);
                console.log("Card successfully bought");
            }

        } else if (command === 'Remove') {
            if (listOfCards.includes(actionToDo)) {
                let index = listOfCards.indexOf(actionToDo);
                listOfCards.splice(index, 1);
                console.log("Card successfully sold");
            } else {
                
                console.log("Card not found");
            }

        } if (command === 'Remove At') {
            actionToDo = Number(actionToDo);
            if (actionToDo >= 0 && actionToDo <= listOfCards.length) {
                listOfCards.splice(actionToDo, 1);
                console.log("Card successfully sold");
            } else {
                console.log("Index out of range");
            }

        } if (command === 'Insert') {
            actionToDo = Number(actionToDo);
            if (actionToDo >= 0 && actionToDo <= listOfCards.length
                && listOfCards.includes(name)) {
                console.log("Card is already bought")
            } else if (actionToDo >= 0 && actionToDo <= listOfCards.length
                && !listOfCards.includes(name)) {
                listOfCards.splice(actionToDo, 0, name);
                console.log("Card successfully bought")
            } else if (actionToDo < 0 || actionToDo > listOfCards.length) {
                console.log("Index out of range");
            }
        }

        numOfComands--;
    }
    console.log(listOfCards.join(', '))
}

solve([
    'T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1'
  ]);