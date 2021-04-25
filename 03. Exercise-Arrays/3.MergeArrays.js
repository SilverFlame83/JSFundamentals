function mergeArr(firstArr, secondArr){
    let thirdArr = [];
    
    for (let i = 0; i < firstArr.length; i++){
        let current = firstArr[i];
        if (i % 2 === 0){
            current = Number(current);
            thirdArr.push(current + Number(secondArr[i]));
        }else{
            
            thirdArr.push(current + secondArr[i]);
            
        }
    }
    console.log(thirdArr.join(' - '));
    
}

mergeArr(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)