function solve(input) {
    let listNames = input.shift().split(', ');
    let recers = {};
    let line = input.shift();

    while (line != 'end of race') {
        let sumOfDigit = 0;
        let letters = /(?<letters>[A-Za-z])/g;
        let digits = /(?<digits>\d)/g;
        let matchDiggit = line.match(digits);
        for (let digit of matchDiggit) {
            digit = Number(digit);
            sumOfDigit += digit;
        }
        let matched = line.match(letters);
        let recer = matched.join('');
        if (listNames.includes(recer)) {

            if (recers.hasOwnProperty(recer)) {
                sumOfDigit += recers[recer];
            }
            recers[recer] = sumOfDigit;
        }
        line = input.shift();
    }
    let ordered = Object.entries(recers);
    ordered.sort((a, b) => b[1] - a[1]);
    let nameList = [];
    for (let [name, score] of ordered) {
        nameList.push(name);
    }
    let result = `1st place: ${nameList[0]}\n2nd place: ${nameList[1]}\n3rd place: ${nameList[2]}`;
    console.log(result);
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])