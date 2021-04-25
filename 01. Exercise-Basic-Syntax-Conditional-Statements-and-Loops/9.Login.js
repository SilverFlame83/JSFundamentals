function solve (input){
    let passWord = input[0];
    let correctPass = passWord.split('').reverse ().join('');
    let isFound = true;

    for (let i = 1; i < input.length; i++){
        let currentTry = input[i];
        if(i >= 4){
            console.log(`User ${passWord} blocked!`);
            break;
        }

        if (currentTry === correctPass){
            console.log(`User ${passWord} logged in.`);
            
        }else{
            console.log('Incorrect password. Try again.');
            
        }
        
    }
    
}
solve(['sunny','rainy','cloudy','sunny','not sunny'])