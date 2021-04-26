function solve(input) {

    let users = {};

    for (let line of input) {
        let [company, id] = line.split(' -> ');

        if (!users.hasOwnProperty(company)) {
            users[company] = new Set();
        }

        users[company].add(id);

    }

    let sorted = Object.entries(users);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, id] of sorted) {
        console.log(company);
        for (let i of id) {

            console.log(`-- ${i}`)

        }
    }
}


solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
);