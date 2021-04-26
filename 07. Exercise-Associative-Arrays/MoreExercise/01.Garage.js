function solveGarage (input){
    let garages = new Map ();

    for(let line of input) {
        let tokens = line.split(' - ');
        let garageNum = tokens[0];
        let garageInfo = tokens[1];
        let currentCars = [];

        if(!garages.has(garageNum)) {
            currentCars.push(garageInfo);
            garages.set(garageNum,currentCars);
        } else {
            currentCars = garages.get(garageNum);
            currentCars.push(garageInfo);
            garages.set(garageNum,currentCars);
        }
    }
    let objGarage = [...garages.entries()];
    let endResult = '';

    for (let [name,info] of objGarage) {
        endResult += `Garage № ${name}\n`;
        for (let car of info){
            for (let el of car) {
                car = car.replace(': ',' - ');
            }
            endResult += `--- ${car}\n`;
        }
    }
    console.log(endResult);
}

solveGarage(['1 - color: blue, fuel type: diesel', 
'1 - color: red, manufacture: Audi', 
'2 - fuel type: petrol', 
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])
// function solveGarageObject(input) {
//     let garagesMap = new Map()
 
//     for (let row of input) {
//         let rowArr = row.split(' - ')
//         let garage = rowArr[0]
//         let carKeyValues = rowArr[1]
//         let availableCars = []
 
//         if (!garagesMap.has(garage)) {
//             availableCars.push(carKeyValues)
//             garagesMap.set(garage, availableCars)
 
//         } else {
//             availableCars = garagesMap.get(garage)
//             availableCars.push(carKeyValues)
//             garagesMap.set(garage, availableCars)
//         }
//     }
 
//     let sortedGarages = [...garagesMap.entries()]
        
 
//     let output = ''
//     for (let [currGarage, currCarKeyValue] of sortedGarages) {
//         output += `Garage № ${currGarage}\n`
 
//         for (let currCarProperties of currCarKeyValue) {
 
//             for (let everySymbol of currCarProperties) {
//                 currCarProperties = currCarProperties.replace(': ', ' - ')
//             }
 
//             output += `--- ${currCarProperties}\n`
//         }
//     }
//     console.log(output);
// function solveGarageArray(input) {
//     let garages = [];
//     for (const line of input) {
//         let [garageNumber, carInfo] = line.split(' - ');
//         let found = garages.find(g => g.garageNumber === garageNumber);
//         if (!found) {
//             garages.push({
//                 garageNumber: garageNumber,
//                 carInfo: []
//             });
//             found = garages.find(g => g.garageNumber === garageNumber);
//         }
//         found.carInfo.push(carInfo);
//     }
//     let output = '';
//     garages.forEach(garage => {
//         output += `Garage № ${garage.garageNumber}\n`;
//         for (let currCar of garage.carInfo) {
//             currCar = currCar.replace(/: /g, ' - ');
//             output += `--- ${currCar}\n`;
//         }
//     });
//     console.log(output);
// }


// solveGarageArray(['1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])