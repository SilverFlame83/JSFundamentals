function gladiator (lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice     ){
    let helmetSum = Math.floor(lostFights/2) * helmetPrice;
    let swordSum = Math.floor(lostFights/3 ) * swordPrice;
    let shieldSum = Math.floor(lostFights/6)  *shieldPrice;
    let armorSum = Math.floor(lostFights/12) * armorPrice;
    
    let totalSum = helmetSum + swordSum + shieldSum + armorSum;
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
    

}
gladiator(7,
    2,
    3,
    4,
    5
    );