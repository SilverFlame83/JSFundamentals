function solve (num){
    let firstLetter = 'a'.charCodeAt(0);

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            for(let k = 0; k < num; k++){
                let result = String.fromCharCode(
                    firstLetter + i,
                    firstLetter + j,
                    firstLetter + k);
                console.log(result);
                
            }
        }
    }
}
solve(3)