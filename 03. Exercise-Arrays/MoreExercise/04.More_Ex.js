// function solve(arr) {
//     let bigger = Number.MIN_SAFE_INTEGER;
//     let result = arr.filter(num => {
//         if (num >= bigger) {
//             bigger = num;
//             return true;
//         } else {
//             return false;
//         }
//     });
//     console.log(result.join(' '));
// }
function solve(arr) {
    let newArr = [];
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentBiggest) {
            currentBiggest = arr[i];
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
