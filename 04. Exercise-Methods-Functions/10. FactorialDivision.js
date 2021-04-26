function factorial(firstNum, secondNum){
    function fact(num){
        let currentNum =1;
        for(let i = 1; i <= num; i++){
            currentNum *= i;
        }
        return currentNum;
    }
    let firstFact = fact(firstNum);
    let secondFact = fact(secondNum);
    
    let division = firstFact/secondFact;
    console.log(division.toFixed(2));
    
}

factorial(6,2)