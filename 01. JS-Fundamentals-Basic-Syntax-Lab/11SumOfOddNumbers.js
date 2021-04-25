function solve (num){
    let i = 0;
    let sum = 0;
    if (i % 2 != 0){
    for(i = 1; i <= num; i ++){

        sum += i;
        console.log(i);
        console.log(sum);
       
    }
    }
}
solve(5)