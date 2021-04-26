function order(order, count){
    let result = 0;
    if(order === 'coffee'){
        result = 1.50 * count;
    }else if(order === 'water'){
        result = 1.00 * count;
    }else if(order === 'coke'){
        result = 1.40 * count;
    }else if (order === 'snacks'){
        result = 2.00 * count;
    }
    console.log(result.toFixed(2)); 
}

order('coffee',2);