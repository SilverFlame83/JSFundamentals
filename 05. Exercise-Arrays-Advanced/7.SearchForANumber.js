function search(arr,manipulator){
    let numToTake = manipulator[0];
    let numToDelete = manipulator[1];
    let numToSearch = manipulator[2];
    let counter = 0;

    arr.splice(numToTake);
    arr = arr.slice(numToDelete);
    

    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        if(current === numToSearch){
            counter++;
        }
    }
    console.log(`Number ${numToSearch} occurs ${counter} times.`);
    
}

search([8, 4, 9, 9, 1, 6,9,9,9],
    [5, 2, 9]
    );