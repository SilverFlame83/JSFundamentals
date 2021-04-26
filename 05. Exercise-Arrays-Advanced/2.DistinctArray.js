function distinctArr(arr) {
    let distinct = [];
    for (let i = 0; i < arr.length; i++) {
        if(!distinct.includes(arr[i])){
            distinct.push(arr[i]);
        }
    }
    console.log(distinct.join(' '));
}

distinctArr([1, 2, 4, 3, 2]);