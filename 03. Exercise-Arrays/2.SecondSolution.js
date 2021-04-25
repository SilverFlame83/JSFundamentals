function commonEl(firstArr, secondArr){
    firstArr.map((element)=> {
        if(secondArr.includes(element)){
            console.log(element);
        }
    })
}

commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);