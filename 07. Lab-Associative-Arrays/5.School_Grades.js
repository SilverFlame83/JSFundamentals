function solve(input) {
    let students = {};

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!students.hasOwnProperty(name)) {
            students[name] = [];
        }
        let exist = students[name];
        for (let grade of grades) {
            exist.push(grade);
        }
    }
    function compareAverage([nameA, gradesA], [nameB, gradesB]) {
        let agA = 0;
        gradesA.forEach(x => agA += x);
        agA /= gradesA.length;

        let agB = 0;
        gradesB.forEach(x => agB += x);
        agB /= gradesB.length;

        return agA - agB;
    }
    let sorted = Object.entries(students);
    sorted.sort(compareAverage);

    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`)
    }

}
//Second Solution
// let students = new Map();

// for (let line of input) {
//     let tokens = line.split(' ');
//     let name = tokens.shift();
//     let grades = tokens.map(Number);

//     if (!students.has(name)) {
//         students.set(name, []);
//     }

//     let exist = students.get(name);
//     for (let grade of grades) {
//         exist.push(grade);
//     }

// }
// function compareAverage([nameA, gradesA],[nameB,gradesB]){
//     let agA = 0;
//     gradesA.forEach(x => agA += x);
//     agA/=gradesA.length;

//     let agB = 0;
//     gradesB.forEach(x => agB += x);
//     agB/= gradesB.length;

//     return agA - agB;
// }
// let sorted = Array.from(students);
// sorted.sort(compareAverage);

// for(let [name,grades] of sorted){
//     console.log(`${name}: ${grades.join(', ')}`)
// }
//}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);