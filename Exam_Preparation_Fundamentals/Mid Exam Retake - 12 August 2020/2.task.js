function solve(arr) {
    let people = Number(arr[0]);
    let wagons = arr[1].split(' ').map(Number);

    while(people !== 0 && freeSpots(wagons)){

        wagons = wagons.map(w=> {
            let n = 4 - w;
            if(n > people){
                n = people;
            }
            people -= n;
            w += n;
            return w;
        })
    }
    if(freeSpots(wagons)){
        console.log(`The lift has empty spots!`);
    }
    if(people > 0){
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(`${wagons.join(' ')}`)
    function freeSpots(array) {
        
        return array.filter(x => x < 4).length > 0;
    }
}

solve([
    "15",
    "0 0 0 0 0"
   ]
   )