// function isNegative(num){
//     return num < 0;
// }
// let myArr = ['4', '-7', '2', '-8', '5'];
// let filtered = myArr.filter(num => num < 0);

// console.log(filtered);
// function compareNum(a, b) {
//     if (a > b) {
//         return 1;
//     } else if (a < b) {
//         return -1;
//     }else{
//         return 0;
//     }
// }
//     let nums = [20, 40, 10, 30, 100, 5];
//     nums.sort(compareNum);

// console.log(nums.join(' '));
function solve(commands) {
    let arrOfNum = commands
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case "Add":
                arrOfNum.push(firstNum);
                break;
            case "Remove":
                let filtered = arrOfNum.filter(num => num !== firstNum);
                arrOfNum = filtered;
                break;
            case "RemoveAt":
                arrOfNum.splice(firstNum, firstNum);
                break;
            case "Insert":
                arrOfNum.splice(secondNum,0,firstNum)
        }
    }
    console.log(arrOfNum.join(' '));
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)

// let num = [4, 2, 53, 6, 8, 43, 3];
// let slice = 2;
// let filtered = num.filter(el => el !== slice);
// console.log(filtered);





