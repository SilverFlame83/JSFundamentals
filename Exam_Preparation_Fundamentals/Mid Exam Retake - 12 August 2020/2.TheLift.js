function solve(arr) {
    let people = Number(arr[0]);
    let wagons = arr[1].split(' ').map(Number);
    let spotsInWagon = [];

    while (wagons.length > 0) {
        let currentWagon = wagons.shift();
        let numOfEmty = 4 - currentWagon;

        if (people < numOfEmty) {
            numOfEmty = people;
        }

        people -= numOfEmty;
        currentWagon += numOfEmty;
        spotsInWagon.push(currentWagon);


    } if (spotsInWagon.filter(x => x < 4).length > 0) {
        console.log('The lift has empty spots!');

    }
    if (people > 0){
        console.log(`There isn\'t enough space! ${people} people in a queue!`)
    }
        console.log(spotsInWagon.join(' '));
}

solve([
    "15",
    "0 0 0 0 0"
   ]
   
   
);