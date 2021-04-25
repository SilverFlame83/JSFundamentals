function addOrSub(arr){
    let newArr = [];
    let firstSum = 0;
    let newSum = 0;
    arr.map((num,i) => {num % 2 === 0? num += i : num -= i;
        newArr.push(num);
    });
    console.log(newArr);
    console.log(firstSum = arr.reduce((a,b) => a + b,0));
    console.log(newSum = newArr.reduce((a,b) => a + b,0));
}

addOrSub([5, 15, 23, 56, 35]);