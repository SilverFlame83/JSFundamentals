function solve(input) {
    let words = input.split(' ');
    let output = [];
    
    function hasOnlyLetters(word) {
        word = word.toLowerCase();
        for (let i =0; i < word.length; i++){
            if(word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
                return false
            }
        }
        return true;
    }
    
    function isValid(word) {
        if (word.startsWith('#') && word.length > 1 &&
            hasOnlyLetters(word.substring(1))) {
            return true;
        }
        return false;
    }
    words.forEach(word => {
        if (isValid(word)) {
            output.push(word.slice(1));
        }
    })
    return output.join('\n');
}

console.log(solve('Nowadays everyone uses # to tag a #special word in #socialMedia'));

//Second Solution
// function solve(str) {
//     let arr = str.split(' ');
//     arr.forEach(word => {
//         if (word[0] == '#' && word.length > 1) {
//             let isOnlyLetter = true;
//             word = word.slice(1);
//             for (let char of word) {
//                 let code = char.charCodeAt();
//                 if (code < 67 || code > 90 && code < 97 || code > 122) {
//                     isOnlyLetter = false;
//                     break;
//                 }
//             }
//             if (isOnlyLetter) {

//                 console.log(word);
//             }
//         }
//     })
// }

// solve('Nowadays everyone uses # to tag a #special word in #socialMedia')