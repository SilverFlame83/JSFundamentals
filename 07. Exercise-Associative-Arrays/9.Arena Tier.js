function solve(input) {
    let gladiatorPool = {};

    for (let line of input) {
        if (line === 'Ave Cesar') {
            break;
        }
        let element = line.split(' ');
        if (element[1] === '->') {
            let lines = line.split(' -> ');
            let gladiatorName = lines[0];
            let technique = lines[1];
            let skillAmount = Number(lines[2]);
            if (!gladiatorPool.hasOwnProperty(gladiatorName)) {
                gladiatorPool[gladiatorName] = {};
            }
            if (!gladiatorPool[gladiatorName].hasOwnProperty(technique)
                || gladiatorPool[gladiatorName][technique] < skillAmount) {
                gladiatorPool[gladiatorName][technique] = skillAmount;
            }
        } else if (element[1] === 'vs') {
            let lines = line.split(' vs ');
            let firstGladiator = lines[0];
            let secondGladiator = lines[1];
            if (gladiatorPool.hasOwnProperty(firstGladiator)
                && gladiatorPool.hasOwnProperty(secondGladiator)) {
                let firstTech = (gladiatorPool[firstGladiator]);
                let secondTech = (gladiatorPool[secondGladiator]);
                for (let key in firstTech) {
                    if (secondTech.hasOwnProperty(key)) {
                        if (firstTech[key] > secondTech[key]) {
                            delete gladiatorPool[secondGladiator]
                        } else if (firstTech[key] < secondTech[key]) {
                            delete gladiatorPool[firstGladiator]
                        }
                    }
                }
            }
        }
    }
    for (let key in gladiatorPool) {
        let sum = 0;
        let obj = gladiatorPool[key];
        for (let inKey in obj) {
            sum += obj[inKey];
        }
        obj['sum'] = sum;
    }
    //console.log(gladiatorPool);
    Object.entries(gladiatorPool)
    .sort((a,b) => b[1].sum- a[1].sum || a[0].localeCompare(b[0]))
    .forEach(element => {
        console.log(`${element[0]}: ${element[1].sum} skill`);
            delete element[1].sum;
            Object.entries(element[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(element => {
                    console.log(` - ${element[0]} <!> ${element[1]}`);
                });
    });
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    )