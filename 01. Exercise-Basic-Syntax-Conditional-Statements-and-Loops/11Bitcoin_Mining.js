function solve (arr){
    let bitCoin = 11949.16;
    let boughtBitCoin = 0;
    let amountBitCoin = 0;
    let totalBitCoinSum = 0;
    let counter = 0;
    let leva = 0;
    let firstDay = 0;

    for (let i = 0; i < arr.length; i++){
        let currentGold = arr[i];
        counter ++;
        if (counter % 3 === 0){
            currentGold -= currentGold * 0.30;
        } 
        leva += currentGold *  67.51;
        if (leva >= bitCoin ){
            amountBitCoin ++;
            boughtBitCoin = Math.floor(leva/bitCoin);
            leva -= bitCoin * boughtBitCoin;
            totalBitCoinSum += boughtBitCoin;
            
        }
        if (amountBitCoin == 1){
            firstDay = counter;
        }
    }
   
    console.log(`Bought bitcoins: ${totalBitCoinSum}`);
    if (firstDay != 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${leva.toFixed(2)} lv.`);
    
}
solve([100,200,300])