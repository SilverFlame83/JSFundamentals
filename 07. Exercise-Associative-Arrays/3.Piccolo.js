function solve(data) {

    let parking = {};

    for (let line of data) {
        let [direction,carNum] = line.split(', ');

        if(direction === 'IN'){
            parking[carNum] = 1;
        } else {
            delete parking[carNum];
        }
    }
    return Object.keys(parking)
    .sort((a,b) => a.localeCompare(b))
    .join('\n')
}

console.log(solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']));
    function solve(input) {
        let carPark = {};
    
        for (let line of input) {
            let [command, carNum] = line.split(', ');
            carPark[carNum] = command;
            if (command === 'OUT' && carPark.hasOwnProperty(carNum)) {
                delete carPark[carNum]
            }
    
        }
        if (Object.keys(carPark).length === 0) {
            console.log('Parking Lot is Empty');
        } else {
            console.log(Object.keys(carPark)
                .sort((a, b) => a.localeCompare(b))
                .join('\n'));
        }
    }
    
    solve(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']
    );