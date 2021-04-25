function magicSum(arr, num) {
    let sum = 0;
    let magic = [];

    for (let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++){
        sum = Number(arr[i]) + Number(arr[j + 1]);
        if (sum === num) {
            magic.push(arr[i], arr[j + 1]);
            console.log(magic.join(' '));
            magic = [];
        }
    }
    }
}

magicSum([1, 7, 6, 2, 19, 23],
    8
    )