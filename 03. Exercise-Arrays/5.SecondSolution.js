function maxNum(arr){
    let maxArr = [];

    for(let i = 0; i < arr.length; i++){
        let isMax = true;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                isMax = false;
                break;
            }
        }
        if(isMax){
            maxArr.push(arr[i]);
        }
    }
    console.log(maxArr.join(' '));
    
}

maxNum([1, 4, 3, 2])