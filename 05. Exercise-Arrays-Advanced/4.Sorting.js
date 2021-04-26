function sortNum(arr) {
    let sorted = [];
    arr = arr.sort((a, b) => b - a);
    while (arr.length !== 0) {
        sorted.push(arr.shift());
        sorted.push(arr.pop());
    }
    console.log(sorted.join(' '));
    
}

sortNum([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])