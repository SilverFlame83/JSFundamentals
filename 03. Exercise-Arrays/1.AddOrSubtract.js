function addOrSub(arr){
    let newArr = [];
    let oldSum = 0;
    let newSum = 0;

    for(let i = 0; i < arr.length; i++){
        let currentArr = arr[i];
        oldSum += currentArr; 
        
        if(currentArr % 2 === 0){
            currentArr += i;
            newArr.push(currentArr);
        }else{
            currentArr -= i;
            newArr.push(currentArr);
        }
    }
    for(let i = 0; i < newArr.length; i ++){
        let currentArr = newArr[i];
        newSum += currentArr;
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
    
}

addOrSub([-5, 11, 3, 0, 2]);