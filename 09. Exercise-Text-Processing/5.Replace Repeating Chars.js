function solve(str) {
    
    let letters = str.split('');
    let newStr = '';

    for(let i = 0; i < letters.length; i++) {
        if(letters[i] !== letters[i+1]){
            newStr += letters[i];
        }
    }
    return newStr;
    // return str
    // .split('')
    // .filter((l,i,arr) => l !==arr[i + 1])
    // .join('')
}
console.log(solve('aaaaabbbbbcdddeeeedssaa'));

//Second Solution
// function solve(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++){
//         if (str[i] !== str[i+1]){
//             result += str[i];
//         }
//     }
//     console.log(result)
// }
// solve('aaaaabbbbbcdddeeeedssaa')