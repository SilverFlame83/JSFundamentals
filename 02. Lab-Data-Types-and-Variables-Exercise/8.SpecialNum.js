function solve(num) {
   for (let i = 1; i <= num; i++){
       let sum = 0;
       let currentNum = i;

       while( currentNum !== 0){
           let currentDigit = currentNum % 10;
           sum += currentDigit;
           currentNum = parseInt(currentNum/10);
       }
       sum = 
       sum === 5 ||
       sum === 7 ||
       sum === 11;
       console.log(sum?`${i} -> True`:`${i} -> False`);
       
   }
}
solve(15)