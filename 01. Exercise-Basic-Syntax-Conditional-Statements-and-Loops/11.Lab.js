function solve(num) {
    let counter = 0;
    let currentNum = 0;
    let sum = 0;
    
    while(counter < num){
        if (currentNum % 2 != 0){
            console.log(currentNum);
            sum += currentNum;
            counter ++;
        }
        currentNum ++;
    }
    console.log(`Sum: ${sum}`);
    
}
solve(3)