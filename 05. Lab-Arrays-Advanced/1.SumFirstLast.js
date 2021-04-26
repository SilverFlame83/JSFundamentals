function sumFirstLast(arr){
    let firstNum = Number(arr[0]);
    let lastNum = Number(arr.pop());
    
    let sum = firstNum + lastNum;
    console.log(sum);
}

sumFirstLast(['5', '10']);