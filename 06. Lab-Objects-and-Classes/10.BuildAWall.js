function wall(arr) {

    let parsedArr = arr.map(Number);
    let allConcrete = [];
    let total = 0;
    let crew = parsedArr.filter(len => len < 30).length;
    

    while (crew !== 0) {
        let sum = 0;
        for(let i = 0; i < parsedArr.length; i++){
            
            if(parsedArr[i] !== 30){
                parsedArr[i] ++;
                sum += 195
                if(parsedArr[i] == 30){
                    crew--;
                }
            }
        }
        total += sum;
        allConcrete.push(sum);
    }
    let endSum = total * 1900;
    console.log(allConcrete.join(', '));
    console.log(`${endSum} pesos`)
}

wall([17, 22, 17, 19, 17]);