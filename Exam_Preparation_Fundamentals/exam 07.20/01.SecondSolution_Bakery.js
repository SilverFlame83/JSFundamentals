function solve(biscuitAmount, workersCount, competingFactory ){
    let dayProduction = biscuitAmount * workersCount;
    let slow = dayProduction - (dayProduction * 0.75);
    slow = slow * 10;
    let myFactory = Math.floor((dayProduction * 30) - slow);
    console.log(`You have produced ${myFactory} biscuits for the past month.`);

    if(myFactory >= competingFactory){
        let diff = myFactory - competingFactory;
        let result = (diff/competingFactory)* 100;
        console.log(`You produce ${result.toFixed(2)} percent more biscuits.`)
        
    }else{
        let diff = competingFactory - myFactory;
        let result = (diff/competingFactory)* 100;
        console.log(`You produce ${result.toFixed(2)} percent less biscuits.`);
    }
    
}

solve(65, 12, 26000)