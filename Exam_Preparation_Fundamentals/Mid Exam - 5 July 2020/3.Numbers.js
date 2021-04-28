function solve(str) {
    let num = str.split(' ').map(Number);
    let sum = 0;

    for (let n of num) {
        sum += n;
    }
    let average = sum / num.length;

    let greater = num.filter(x => x > average);

    greater.sort((a, b) => b - a);
    if (greater.length === 0) {
        console.log('No')
    } else {
        console.log(greater.slice(0, 5).join(' '));
    }
}

solve('-1 -2 -3 -4 -5 -6');