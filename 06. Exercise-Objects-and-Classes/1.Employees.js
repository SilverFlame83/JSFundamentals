function employeeInfo(input) {
    let employee = {};

    for (let person of input) {
        employee[person] = person.length;
    }

    Object.entries(employee).forEach(element =>
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`))
}


let input = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];
employeeInfo(input)
