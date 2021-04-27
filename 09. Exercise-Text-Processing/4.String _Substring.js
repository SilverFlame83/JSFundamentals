function solve(key, string) {
    key = key.toLowerCase();
    string = string.toLowerCase();

    return string.split(' ')
        .find(word => word === key)
        ? key
        : `${key} not found!`

}

console.log(solve('python',
    'JavaScript is the best programming language'
));

//Second Solution
// function solve(key,string) {
//     key = key.toLowerCase();
//     string = string.toLowerCase();

//     let word = string.split(' ');

//     return word.includes(key) ? key : `${key} not found`


// }

// console.log(solve('python',
// 'JavaScript is the best programming language'
// ));

// function solve(word, str) {
//     word = word.toLowerCase();
//     str = str.toLowerCase();
//     let tokens = str.split(' ');
//     let isHere = false;

//     for (let token of tokens) {
//         if (token === word) {
//             console.log(word);
//             isHere = true;
//             break;
//         } else {
//         isHere = false;
//         }
//     }
//     if (isHere === false) {
//         console.log(`${word} not found!`)
//     }
// }

// solve('Pyton',
//     'is the best programming languagePyton'

// )