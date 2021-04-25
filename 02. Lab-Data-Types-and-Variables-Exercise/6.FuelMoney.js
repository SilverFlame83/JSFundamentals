function fuelMoney(distance, passengers, oneLitterPrice){
    let fuel = (distance/100) * 7;
    fuel += passengers * 0.100;
    let money = fuel * oneLitterPrice;

    console.log(`Needed money for that trip is ${money} lv`);
    
}
fuelMoney(90, 14, 2.88);