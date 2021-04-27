function solve(str) {

    let splited = [];
    let capitalLetter = '';

    for(let i = 1; i < str.length; i++){
        
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90){
            let word = str.substring(capitalLetter,i);
            splited.push(word);
            capitalLetter = i;
        }
    }
    splited.push(str.substring(capitalLetter, str.length));
    console.log(splited.join(', '))
    
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')





//Second Solution
// let result = [];
    // let cap = 0;
    // for (let i = 1; i < str.length; i++) {
    //     if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
    //         let word = str.substring(cap, i);
    //         result.push(word);
    //         cap = i;
    //     }
    // }
    // result.push(str.substring(cap, str.length));
    // console.log(result.join(', '))