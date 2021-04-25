function nthEl(arr) {
    let result = [];
    let step = Number(arr[arr.length-1]);
    
    for (let i = 0; i < arr.length - 1; i+= step){
        result.push(arr[i]);
    }
    console.log(result.join(' '));
    
}

nthEl(['1', '2', '3', '4', '5', '6']);