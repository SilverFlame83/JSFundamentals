function smallestNum(arr){
    let smallest = arr.sort((a,b) => a-b);
    let smallestTwo = smallest.slice(0,2);

    console.log(smallestTwo);
    
}

smallestNum([3, 0, 10, 4, 7, 3]);