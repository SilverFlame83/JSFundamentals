function solve(input) {
    let firstArr = input[0];
    let secondArr = input[1];
    let thirdArr = input[2];
    let concat = '';
    let end = [];

    if (firstArr.length >= 10 && secondArr.length >= 10) {
        concat = firstArr + secondArr;
        for (let i = 0; i < concat.length; i++) {
            if (concat[i] === 'a' ||
                concat[i] === 'o' ||
                concat[i] === 'e' ||
                concat[i] === 'i' ||
                concat[i] === 'u') {
            
                
                end.push(thirdArr[i].toLocaleUpperCase());
            } else {
                end.push(concat[i]);
            }
        }
    }
}
    solve(['ilovepizza', 'ihatevegetables', 'orange'])