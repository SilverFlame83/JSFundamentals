function reverse(n, arr){
    let newArr = [];
    
    for (let i = 0; i < n; i++){
        newArr.push(arr[i]);
    }
    let result = ''; 
    for (let i = newArr.length -1; i >= 0; i--){
        result += newArr[i] + ' ';
    }
    console.log(result);
    
    
}
reverse(2, [66, 43, 75, 89, 47]);