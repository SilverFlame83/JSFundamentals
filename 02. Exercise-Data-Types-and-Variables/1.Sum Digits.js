function solve(num){
    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++){
        let currentNum = Number(num[i]);
        sum += currentNum;
    }
    console.log(sum);
    
}
solve(245678);