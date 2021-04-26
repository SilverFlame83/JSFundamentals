function sortedArr(arr){
    return arr.slice(0).sort((a,b)=> {
        if(a.length === b.length){
            return a.localeCompare(b);
        }else{
            return a.length - b.length;
        }
    }).join('\n');
}

console.log(sortedArr(["alpha", "beta", "gamma"]));