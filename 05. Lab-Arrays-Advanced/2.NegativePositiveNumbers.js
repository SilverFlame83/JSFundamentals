function negativeOrPositive(arr) {
    let resultArr = [];

    for (num of arr) {
        if (num < 0) {
            resultArr.unshift(num);
        } else {
            resultArr.push(num);
        }
    }
    console.log(resultArr.join('\n'));
    
}

negativeOrPositive([3, -2, 0, -1])