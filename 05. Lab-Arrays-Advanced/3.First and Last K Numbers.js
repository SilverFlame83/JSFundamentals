function firstLast(arr){
    let k = arr.shift();
    let start = arr.slice(0,k).join(' ');
    let end = arr.slice(arr.length -k,arr.length).join(' ');
    
    console.log(start);
    console.log(end);
    
}

firstLast([2, 7, 8, 9]);