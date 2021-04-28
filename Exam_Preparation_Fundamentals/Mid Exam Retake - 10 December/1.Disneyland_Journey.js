function disneyLand(input) {
    let journeyCost = Number(input.shift());
    let months = Number(input.shift());
    let firstMonthSum = journeyCost * 0.25;
    let monthlySum = firstMonthSum;

    for (let i = 2; i <= months; i++) {
        if (i % 4 === 0) {
            let bonus = monthlySum * 0.25;
            monthlySum += bonus + firstMonthSum;
        } else if (i % 2 === 0) {
            monthlySum += journeyCost * 0.25;
        
        } else if (i % 2 !== 0) {
            monthlySum -= monthlySum * 0.16;
            monthlySum += firstMonthSum;
        }

    }
   if(monthlySum < journeyCost){
       let need = journeyCost - monthlySum;
       console.log(`Sorry. You need ${need.toFixed(2)}lv. more.`)
   }else{
       let left = monthlySum - journeyCost;
       console.log(`Bravo! You can go to Disneyland and you will have ${left.toFixed(2)}lv. for souvenirs.`)
   }
}

disneyLand([ '3265', '3' ])