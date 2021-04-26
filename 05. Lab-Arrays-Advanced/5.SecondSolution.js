/*function findOdIndex(arr) {
    let isOdd = arr.filter((x, y) => (y % 2) == 1);
    let mappedOdd = isOdd.map(x => x * 2);
    console.log(mappedOdd.reverse());
    
}

findOdIndex([10, 15, 20, 25]);*/
function findOdIndex(arr) {
    console.log(arr
        .filter((x, y) => (y % 2) == 1)
        .map(y => y * 2)
        .reverse()
    );
}

findOdIndex([10, 15, 20, 25]);