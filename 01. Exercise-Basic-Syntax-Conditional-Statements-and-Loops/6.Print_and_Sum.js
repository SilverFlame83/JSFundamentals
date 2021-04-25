function solve (startNum, endNum){
    let sum = 0;
    let totalSum = '';

    for(let i = startNum; i <= endNum; i++){
        totalSum += i + " 7.	Triangle of Numbers";
        
        
        sum += i;
    }
    console.log(totalSum);
    console.log(`Sum: ${sum}`);
    
}
solve(5, 10)