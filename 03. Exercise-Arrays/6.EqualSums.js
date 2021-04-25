function equalSum(arr){
    let isEqual = false;
    
    for (let i = 0; i < arr.length; i++){
        let rightSum = 0;
        
        for(let j = arr.length - 1; j > i; j--){
            let current = arr[j];
            rightSum += current;
        }
        let leftSum = 0;
        for(let k = 0; k < i; k++){
            let current = arr[k];
            leftSum += current
        }
        if(leftSum === rightSum){
            console.log(i);
            isEqual = true;
            break;
        }
    }
    if(isEqual === false){
        console.log('no');
        
    }
}

equalSum([1, 2, 3, 3])