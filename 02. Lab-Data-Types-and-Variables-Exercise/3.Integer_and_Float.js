function solve(firstNum, secondSum, thirdSum){
    let result = firstNum + secondSum + thirdSum;

    if(result % 1 === 0){
        console.log(`${result}-Integer`);
        
    }else{
        console.log(`${result}-Float`);
        
    }
}
solve(9, 100, 1.1)