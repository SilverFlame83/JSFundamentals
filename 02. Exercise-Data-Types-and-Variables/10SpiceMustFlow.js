function spice(startingYield){
    
    let days = 0;
    let totalYield = 0;

    while(startingYield >= 100){
        days ++;
        totalYield += startingYield;
        totalYield -= 26;
        startingYield -= 10;
    }
    if(startingYield >= 26 && days > 0){
        totalYield -= 26;
    }
    console.log(days);
    console.log(totalYield);
    
}
spice(111)