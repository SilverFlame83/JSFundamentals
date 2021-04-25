function elements(arr1, arr2){
    
    for (let i = 0; i < arr1.length; i++){
        let currentArr1 = arr1[i];
        for(let j = 0; j < arr2.length; j++){
            let currentArr2 = arr2[j];
            if(currentArr1 === currentArr2){
                console.log(currentArr1);
                
            }
        }
    }
}

elements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)