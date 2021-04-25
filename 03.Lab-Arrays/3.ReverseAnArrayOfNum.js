function reverse(n, num){
    let newArr = [];

    for (let i = n; i > 0; i--){
        newArr.push(num[i]);
    }
    console.log(newArr.join(' '));
    
}

reverse(3, [10, 20, 30, 40, 50])