function maxSequence(arr) {
    let theLongest = [];
    let resultStr = [];
    let count = 1;
    let maxCount = 1;

    for (let i = 0; i < arr.length; i++) {
        if (count === 1) {
            resultStr.push(arr[i]);
        }
        if (arr[i] === arr[i + 1]){
            count ++;
            resultStr.push(arr[i]);
            if(count > maxCount){
                theLongest = resultStr;
                maxCount = count;
            }
        }else{
            resultStr = [];
            count = 1;
        }
    }
    console.log(theLongest.join(' '));
    
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])






