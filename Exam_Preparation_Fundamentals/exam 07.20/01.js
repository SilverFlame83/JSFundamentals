function solve(biscuitAmount, workersCount, competingFactory) {
    let production = 0;
    let monthProduction = 0;

    for(let i = 0; i < 30; i++ ){
        let daysProduction = 0;
        if(i % 3 === 0){
            daysProduction = Math.floor((workersCount * biscuitAmount)* 0.75);
        }else{
            daysProduction = Math.floor(workersCount * biscuitAmount);

        }
        monthProduction += daysProduction;
    }
    console.log(`You have produced ${monthProduction} biscuits for the past month.`)

    let dif = Math.abs(monthProduction - competingFactory);
    let result = (dif/competingFactory) * 100;
    if (monthProduction >= competingFactory) {
        
        console.log(`You produce ${result.toFixed(2)} percent more biscuits.`)

    } else {
        
        console.log(`You produce ${result.toFixed(2)} percent less biscuits.`);
    }
}

solve(78, 8, 16000)